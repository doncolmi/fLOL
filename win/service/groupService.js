const axios = require('axios');
const groupSchema = require('../model/groupSchema');

const crypto = require('crypto');
const log = console.log;

const useCrypto = (pw, adminPw) => {
  const salt = (Math.round((new Date().valueOf() * Math.random())) + "");
  if(pw === '') {
    const encryptPw = {
      salt : salt,
      pw : '',
      adminPw : crypto.createHash("sha512").update(adminPw + salt).digest("hex"),
    }
  } else {
    const encryptPw = {
      salt : salt,
      pw : crypto.createHash("sha512").update(pw + salt).digest("hex"),
      adminPw : crypto.createHash("sha512").update(adminPw + salt).digest("hex"),
    }
  }
  return encryptPw;
}

const addMember = (group, accountId) => {
  group.members.push(accountId);
  group.membersNum += 1;
};

const removeMember = (group, accountId) => {
  group.members.splice(group.members.indexOf(accountId), 1);
  group.membersNum -= 1;
};

module.exports.updateMemberList = async (groupName, updateList) => {
  try {
    const group = await groupSchema.findOne({
      name: groupName,
    });
    for (const item of updateList.addMember) {
      await addMember(group, item);
    }
    for (const item of updateList.removeMember) {
      await removeMember(group, item);
    }
    group.modifiedDate = Date.now();
    await group.save();
    return true;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports.countCode = async (code) => {
  const groupCnt = await userSchema.countDocuments({ code: code });
  return gorupCnt < 1;
};

module.exports.saveGroup = async (groupData) => {
  try {
    const { salt, pw, adminPw } = useCrypto(groupData.password, groupData.adminPassword);
    groupData.salt = salt;
    groupData.password = pw;
    groupData.adminPassword = adminPw;
    const group = new groupSchema(groupData);
    await group.save();
  } catch (e) {
    throw new Error(e);
  }
};

module.exports.updateGroupInfo = async ({
  name,
  code,
  open,
  password,
  adminPassword,
  salt,
}) => {
  const group = await groupSchema.findOne({
    code: code,
  });
  group.name = name;
  group.code = code;
  group.open = open;
  group.password = password;
  group.adminPassword = adminPassword;
  group.salt = salt;
  group.modifiedDate = Date.now();
  group.save();
  return await groupSchema.findOne({
    code: code,
  });
};
