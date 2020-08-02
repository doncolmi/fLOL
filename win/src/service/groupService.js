const jwt = require('jsonwebtoken');

const groupSchema = require('../model/schema/groupSchema');

const crypto = require('crypto');

const enCrypted = (pw, salt) => {
  return crypto
    .createHash('sha512')
    .update(pw + salt)
    .digest('hex');
};

const useCrypto = (pw, adminPw) => {
  const salt = Math.round(new Date().valueOf() * Math.random()) + '';
  let encryptPw;
  if (pw === '') {
    encryptPw = {
      salt: salt,
      pw: '',
      adminPw: enCrypted(adminPw, salt),
    };
  } else {
    encryptPw = {
      salt: salt,
      pw: enCrypted(pw, salt),
      adminPw: enCrypted(adminPw, salt),
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

module.exports.getGroup = (code) => {
  return new Promise((resolve, reject) => {
    groupSchema
      .findOne(
        { code: code },
        {
          open: 1,
          members: 1,
          membersNum: 1,
          name: 1,
          code: 1,
          createdDate: 1,
          _id: 0,
        }
      )
      .then((res) => {
        if (res) {
          resolve(res);
        } else {
          reject(Error('Not Found'));
        }
      })
      .catch((err) => reject(Error(err)));
  });
};

module.exports.deleteGroup = async (code) => {
  try {
    const group = await groupSchema.deleteOne({
      code: code,
    });
    return true;
  } catch (e) {
    return false;
  }
};

module.exports.searchGroup = (keyword, page) => {
  return new Promise((resolve, reject) => {
    groupSchema
      .find(
        { name: new RegExp(keyword), open: true },
        { membersNum: 1, name: 1, code: 1, createdDate: 1, _id: 0 }
      )
      .sort({ createdDate: -1 })
      .skip((page - 1) * 10)
      .limit(10)
      .then((res) => resolve(res))
      .catch((err) => reject(new Error(err)));
  });
};

module.exports.countSearchGroup = (keyword) => {
  return new Promise((resolve, reject) => {
    groupSchema
      .countDocuments({
        name: new RegExp(keyword),
        open: true,
      })
      .then((res) => resolve(res))
      .catch((err) => reject(new Error(err)));
  });
};

module.exports.authGroup = (body) => {
  return new Promise((resolve, reject) => {
    groupSchema
      .findOne({ code: body.code })
      .then((res) => {
        const password = enCrypted(body.password, res.salt);
        if (res.password === password) resolve(body.code);
      })
      .catch((err) => reject(new Error(err)));
  });
};

const getPayload = (code) => ({
  admin: true,
  code: code,
});

const setOption = (time, issuer, subject) => ({
  expiresIn: time,
  issuer: issuer,
  subject: subject,
});

const getToken = (payload, option) =>
  jwt.sign(payload, process.env.SECRET_KEY, option);

module.exports.adminAuthGroup = async (body) => {
  return new Promise((resolve, reject) => {
    groupSchema
      .findOne({ code: adminInfo.code })
      .then((res) => {
        const password = enCrypted(body.password, res.salt);
        if (res.adminPassword === password) {
          const token = getToken(
            getPayload(res.code),
            setOption('5h', 'flol', 'adminPassword')
          );
          resolve(token);
        }
      })
      .catch((err) => reject(new Error(err)));
  });
};
