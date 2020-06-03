const axios = require('axios');
const userSchema = require('../model/userSchema');

const log = console.log;

// make Http Header
const Headers = {
  'Accept-Charset': 'application/x-www-form-urlencoded; charset=UTF-8',
  'X-Riot-Token': '',
};
const Config = () => {
  Headers['X-Riot-Token'] = process.env.LOL_KEY;
  return {
    headers: Headers,
  };
};

// get User name, eId, EAccountID, level
const getUserId = async (name) => {
  const getUserIdAPI =
    `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/` + encodeURI(name);

  const user = await axios.get(getUserIdAPI, Config());

  return {
    name: name,
    encryptedId: user.data.id,
    encryptedAccountId: user.data.accountId,
    level: user.data.summonerLevel,
  };
};

const checkId = async (accountId) => {
  userSchema.countDocuments({ encryptedAccountId : accountId}, function(err, count) {
    console.log(`We go hi : ${count}`);
  })

}

module.exports.getUser = async (name) => {
  const validName = name.replace(/(\s*)/g, '').toLowerCase();
  const userIdInfo = await getUserId(validName);
  if(await checkId(userIdInfo.encryptedAccountId)) {

  }
  // data에 3분 이내에 갱신되거나 생성된 user데이터가 있는가?
  // 있다면 해당 데이터를 return 없을 경우 갱신 또는 생성 단계

  // name, encryptedId, encryptedAccountId, level in userIdInfo
  
  return userIdInfo;
};
