const axios = require('axios');
const userSchema = require('../model/userSchema');

const log = console.log;

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

// count user's Data in MongoDB for getUserDB
const cntIdByAccountId = async (accountId) => {
  try {
    const cnt = await userSchema
      .countDocuments({ encryptedAccountId: accountId })
      .catch((e) => console.error(e));
    return cnt > 0;
  } catch (error) {
    throw new Error(error);
  }
};

const saveUserDB = async (info) => {
  const 
};

// export function
module.exports.getUser = async (name) => {
  const validName = name.replace(/(\s*)/g, '').toLowerCase();
  const userIdInfo = await getUserId(validName);
  const accountId = userIdInfo.encryptedAccountId;

  if (await cntIdByAccountId(accountId)) {
    const user = await getUserDB(accountId);
    if (await checkModifiedDate(user.modifiedDate)) {
    } else {
      return { err: 'NOTOVER3MINUTES' };
    }
  } else {
    try {
      await saveUserDB(userIdInfo);
    } catch (error) {
      throw new Error(error);
    }
  }

  // name, encryptedId, encryptedAccountId, level in userIdInfo
  return userIdInfo;
};
