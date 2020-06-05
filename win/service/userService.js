const axios = require('axios');
const userSchema = require('../model/userSchema');
const lolData = require('../model/lolData');

const log = console.log;

// getMaxKey
const getMax = (list) => {
  const listSet = new Set([...list]);
  const listObj = {};
  for (const elem of listSet) {
    listObj[elem] = 0;
  }
  for (const elem of list) {
    listObj[elem]++;
  }
  let max = 0;
  let maxKey;
  for (const elem of listSet) {
    if (listObj[elem] > max) {
      max = listObj[elem];
      maxKey = elem;
    }
  }
  return maxKey;
};

// make Http Header
const Headers = {
  'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
  'X-Riot-Token': '',
};
const Config = () => {
  Headers['X-Riot-Token'] = process.env.KEY;
  return {
    headers: Headers,
  };
};

// get User name, eId, EAccountID, level
const getUserId = async (name) => {
  const getUserIdAPI =
    `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/` +
    encodeURI(name);

  const user = await axios.get(getUserIdAPI, Config());
  const result = {
    ogName: user.data.name,
    name: name,
    encryptedId: user.data.id,
    encryptedAccountId: user.data.accountId,
    level: user.data.summonerLevel,
  };
  return result;
};

// check user's modifiedDate over 3 minutes
const checkModifiedDate = async (modifiedDate) => {
  const elapsed = (Date.now() - modifiedDate.getTime()) / 1000;
  return elapsed > 300;
};

// get user's data in MongoDB
const getUserDB = async (accountId) => {
  try {
    const user = await userSchema.findOne({ encryptedAccountId: accountId });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

const getUserDbByName = async (name) => {
  try {
    const user = await userSchema.findOne({ name: name });
    return user;
  } catch (error) {
    throw new Error(error);
  }
};

// count user's Data in MongoDB for getUserDB
const cntIdByAccountId = async (accountId) => {
  try {
    const cnt = await userSchema
      .countDocuments({ encryptedAccountId: accountId })
      .catch((e) => console.error(e));
    return cnt < 1;
  } catch (error) {
    throw new Error(error);
  }
};

const getUserLeagueInfo = async (encryptedId) => {
  // getLeagueInfo
  const getUserLeagueAPI = `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedId}`;
  const league = await axios.get(getUserLeagueAPI, Config());
  const data = league.data[0];

  // make ETC info
  const etc = [];
  if (data.veteran) etc.push('veteran');
  if (data.inactive) etc.push('inactive');
  if (data.freshBlood) etc.push('freshBlood');
  if (data.hotStreak) etc.push('hotStreak');

  // return League Info
  return {
    rankTier: `${data.tier} ${data.rank}`,
    rankScore: `${data.leaguePoints}`,
    win: data.wins,
    lose: data.losses,
    etc: etc,
  };
};

const getMatchObject = (matchData) => {
  const MatchObject = {
    champions: [],
    queue: [],
    lane: [],
    gameIds: [],
  };
  for (const elem of matchData) {
    MatchObject.champions.push(elem.champion + '');
    MatchObject.queue.push(elem.queue + '');
    MatchObject.lane.push(elem.lane);
    if (MatchObject.gameIds.length < 5) MatchObject.gameIds.push(elem.gameId);
  }
  return MatchObject;
};

const getRecentWinLose = async (gameIds, name) => {
  let recentWinLose = '';

  for (const id of gameIds) {
    const matchAPI = `https://kr.api.riotgames.com/lol/match/v4/matches/${id}`;
    const match = await axios.get(matchAPI, Config());
    const teams = match.data.teams[0];
    if (teams.win === 'Win') {
      let winLose = false;
      for (let i = 0; i < 5; i++) {
        const member = match.data.participantIdentities[i].player.summonerName
          .replace(/(\s*)/g, '')
          .toLowerCase();
        if (member === name) {
          winLose = true;
        }
      }
      winLose ? (recentWinLose += 'W') : (recentWinLose += 'L');
    } else {
      let winLose = true;
      for (let i = 0; i < 5; i++) {
        const member = match.data.participantIdentities[i].player.summonerName
          .replace(/(\s*)/g, '')
          .toLowerCase();
        if (member === name) {
          winLose = false;
        }
      }
      winLose ? (recentWinLose += 'W') : (recentWinLose += 'L');
    }
  }

  return recentWinLose;
};

const getUserMatchInfo = async (encryptedAccountId, name) => {
  const getUserMatchAPI = `https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/${encryptedAccountId}?endIndex=30&beginIndex=0`;
  const matches = await axios.get(getUserMatchAPI, Config());
  const matchData = [...matches.data.matches];

  const matchObject = getMatchObject(matchData);
  const winLose = await getRecentWinLose(matchObject.gameIds, name);

  return {
    recentMatch: lolData.getQueue(getMax(matchObject.queue)),
    recentLane: getMax(matchObject.lane),
    recentChampion: lolData.champions[getMax(matchObject.champions)],
    recentWinLose: winLose,
  };
};

const saveUserDB = async (info) => {
  const leagueInfo = await getUserLeagueInfo(info.encryptedId);
  const matchInfo = await getUserMatchInfo(info.encryptedAccountId, info.name);
  const saveUserData = Object.assign(info, leagueInfo, matchInfo);
  const testUser = new userSchema(saveUserData);

  await testUser.save();
};

// export function
module.exports.getUser = async (name) => {
  const validName = name.replace(/(\s*)/g, '').toLowerCase();
  const userIdInfo = await getUserId(validName);
  const accountId = userIdInfo.encryptedAccountId;

  // If there is no user data,
  // Create and store data
  if (await cntIdByAccountId(accountId)) {
    try {
      await saveUserDB(userIdInfo);
      log('데이터를 생성할건데용!');
    } catch (error) {
      throw new Error(error);
    }
  } else {
    log('이미 잇어서 안할건데용!');
  }

  // Get user data from DB
  const user = await getUserDB(accountId);

  // This logic is for updating.
  // However, we are discussing how to handle the logic of the update.
  // So I commented out the logic.

  /* if (await checkModifiedDate(user.modifiedDate)) {

  } else {
    return { err: 'NOTOVER3MINUTES' };
  } */

  return user;
};

// export function(update)
const updateUser = async (name) => {
  const user = await getUserDbByName(accountId);
};
