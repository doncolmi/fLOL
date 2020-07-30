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

module.exports.auth = async (auth, code) => {
  auth = auth.replace('Bearer ', '');
  const auths = jwt.verify(auth, process.env.SECRET_KEY);
  if (auths.code !== code) {
    throw new Error('다른 code 오류');
  }
};

module.exports.save = (body) => {
  new noticeSchema(body).save().catch((err) => {
    throw new Error('글 작성 오류');
  });
};
