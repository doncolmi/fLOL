const axios = require('axios');
const jwt = require('jsonwebtoken');

const noticeSchema = require('../model/schema/noticeSchema');

const log = console.log;

const get = async (url) => {
  const { data } = await axios.get(url);
  return data;
};

const post = async (url, item) => {
  const { data } = await axios.post(url, item);
  return data;
};

module.exports.auth = (auth, code) => {
  return new Promise((resolve, reject) => {
    auth = auth.replace('Bearer ', '');
    const auths = jwt.verify(auth, process.env.SECRET_KEY);
    if (auths.code !== code) reject(Error('code error'));
    resolve(true);
  });
};

module.exports.save = (body) => {
  return new Promise((resolve, reject) => {
    new noticeSchema(body)
      .save()
      .then((res) => resolve(res))
      .catch((err) => reject(Error(err)));
  });
};

module.exports.get = (code, page) => {
  return new Promise((resolve, reject) => {
    noticeSchema
      .find({ code: code })
      .sort({ createdDate: -1 })
      .skip((page - 1) * 10)
      .limit(10)
      .then((res) => resolve(res))
      .catch((err) => reject(Error(err)));
  });
};

module.exports.delete = (ids) => {
  return new Promise((resolve, reject) => {
    noticeSchema
      .deleteOne({ id: ids })
      .then((res) => resolve(res))
      .catch((err) => reject(Error(err)));
  });
};

module.exports.max = (code) => {
  return new Promise((resolve, reject) => {
    noticeSchema
      .countDocuments({
        code: code,
      })
      .then((res) => {
        resolve(Math.ceil(res / 10));
      })
      .catch((err) => reject(Error(err)));
  });
};
