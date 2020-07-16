const axios = require('axios');
const groupSchema = require('../model/schema/groupSchema');

const crypto = require('crypto');
const log = console.log;

const useCrypto = (pw, adminPw) => {
  const salt = Math.round(new Date().valueOf() * Math.random()) + '';
  let encryptPw;
  if (pw === '') {
    encryptPw = {
      salt: salt,
      pw: '',
      adminPw: crypto
        .createHash('sha512')
        .update(adminPw + salt)
        .digest('hex'),
    };
  } else {
    encryptPw = {
      salt: salt,
      pw: crypto
        .createHash('sha512')
        .update(pw + salt)
        .digest('hex'),
      adminPw: crypto
        .createHash('sha512')
        .update(adminPw + salt)
        .digest('hex'),
    };
  }
  return encryptPw;
};

const addMember = (group, accountId) => {
  group.members.push(accountId);
  group.membersNum += 1;
};

const removeMember = (group, accountId) => {
  group.members.splice(group.members.indexOf(accountId), 1);
  group.membersNum -= 1;
};

const codeMaker = async () => {
  const code = Math.random().toString(36).substr(2, 6);
  if (await codeIsZero(code)) {
    return code;
  } else {
    await codeMaker();
  }
};

const codeIsZero = async (code) => {
  const groupCnt = await groupSchema.countDocuments({ code: code });
  return groupCnt < 1;
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

module.exports.saveGroup = async (groupData) => {
  try {
    const { salt, pw, adminPw } = useCrypto(
      groupData.password,
      groupData.adminPassword
    );
    groupData.code = await codeMaker();
    groupData.salt = salt;
    groupData.password = pw;
    groupData.adminPassword = adminPw;
    const group = new groupSchema(groupData);
    await group.save();
    return groupData.code;
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
}) => {
  const group = await groupSchema.findOne({
    code: code,
  });
  const { salt, pw, adminPw } = useCrypto(password, adminPassword);
  group.name = name;
  group.code = code;
  group.open = open;
  group.password = pw;
  group.adminPassword = adminPw;
  group.salt = salt;
  group.modifiedDate = Date.now();
  group.save();
  return await groupSchema.findOne({
    code: code,
  });
};

module.exports.getGroup = async (code) => {
  const group = await groupSchema.findOne({
    code: code,
  });

  return group;
};

module.exports.deleteGroup = async (code) => {
  try {
    const group = await groupSchema.deleteOne({
      code: code,
    });

    return true;
  } catch (e) {
    console.log(e);

    return false;
  }
};
