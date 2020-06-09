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
  try {
    const getUserIdAPI =
      `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/` +
      encodeURI(name);

    const { data } = await axios.get(getUserIdAPI, Config());

    return {
      ogName: data.name,
      name: name,
      encryptedId: data.id,
      encryptedAccountId: data.accountId,
      level: data.summonerLevel,
    };
  } catch (e) {
    return { ERROR: 'NOTFOUND' };
  }
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

  if (data === []) {
    return {
      rankTier: `UNRANK`,
      rankScore: 0,
      battleScore: 0,
      win: 0,
      lose: 0,
      etc: [],
    };
  }

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
    battleScore: lolData.getBattleScore(
      `${data.tier} ${data.rank}`,
      data.leaguePoints
    ),
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
    const { data } = await axios.get(matchAPI, Config());
    const teams = data.teams[0];
    if (teams.win === 'Win') {
      let winLose = false;
      for (let i = 0; i < 5; i++) {
        const member = data.participantIdentities[i].player.summonerName
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
        const member = data.participantIdentities[i].player.summonerName
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
  const { data } = await axios.get(getUserMatchAPI, Config());
  const matchData = [...data.matches];

  const matchObject = getMatchObject(matchData);

  let winLose = 'UNRANK';
  if (matchData.length > 5) {
    winLose = await getRecentWinLose(matchObject.gameIds, name);
  }

  return {
    recentMatch: lolData.getQueue(getMax(matchObject.queue)),
    recentLane: getMax(matchObject.lane),
    recentChampion: lolData.champions[getMax(matchObject.champions)],
    recentWinLose: winLose,
  };
};

const saveUserDB = async (info) => {
  const leagueInfo = await getUserLeagueInfo(info.encryptedId);
  const matchInfo = await getUserMatchInfo(info.encryptedAccountId, info.ogName);
  const saveUserData = Object.assign(info, leagueInfo, matchInfo);
  const user = new userSchema(saveUserData);
  

  await user.save();
};

// export function
module.exports.getUser = async (name) => {
  const validName = name.replace(/(\s*)/g, '').toLowerCase();
  const userIdInfo = await getUserId(validName);
  if (userIdInfo.ERROR) return userIdInfo;
  log(userIdInfo);
  const accountId = userIdInfo.encryptedAccountId;

  // If there is no user data,
  // Create and store data
  if (await cntIdByAccountId(accountId)) {
    try {
      await saveUserDB(userIdInfo);
    } catch (error) {
      throw new Error(error);
    }
  }

  // Get user data from DB
  const user = await getUserDB(accountId);

  return user;
};

// export function(update)
// True, if update success
// Fasle, if update fail
module.exports.updateUser = async (accountId) => {
  const user = await getUserDB(accountId);

  if (await checkModifiedDate(user.modifiedDate)) {
    const updateBoolean = await updateUserDB(accountId);
    return updateBoolean;
  } else {
    return { err: 'NOTOVER3MINUTES' };
  }
};

const updateUserDB = async (accountId) => {
  let user;
  try {
    user = await getUserDB(accountId);
    const userIdInfo = await getUserId(user.name);

    const leagueInfo = await getUserLeagueInfo(user.encryptedId);
    const matchInfo = await getUserMatchInfo(
      user.encryptedAccountId,
      user.name
    );

    for (const item of Object.keys(userIdInfo)) {
      user[item] = userIdInfo[item];
    }
    for (const item of Object.keys(leagueInfo)) {
      user[item] = leagueInfo[item];
    }

    for (const item of Object.keys(matchInfo)) {
      user[item] = matchInfo[item];
    }
    user.modifiedDate = Date.now();
  } catch (e) {
    console.error(e);
  }

  try {
    await user.save();
    return true;
  } catch (e) {
    return false;
  }
};
