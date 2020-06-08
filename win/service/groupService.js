const axios = require('axios');
const groupSchema = require('../model/groupSchema');

const log = console.log;

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

module.exports.saveGroup = async (groupData) => {
  try {
    const group = new groupSchema(groupData);
    await group.save();
  } catch (e) {
    throw new Error(e);
  }
};

// module.exports.updateGroupInfo = async ({
//   name,
//   code,
//   open,
//   password,
//   adminPassword,
//   salt,
// }) => {
//   const group = await groupSchema.findOne({
//     code: code,
//   });
//   group.name = name;
//   group.code = code;
//   group.open = open;
//   group.password = password;
//   group.adminPassword = adminPassword;
//   group.salt = salt;
//   group.modifiedDate = Date.now();
//   group.save();
//   return await groupSchema.findOne({
//     code: code,
//   });
//   // todo : salt재설정 해야할듯? 애초에 salt만드는 코드도 saveGroup에서 만들어야함
// };
