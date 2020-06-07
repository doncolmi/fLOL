const log = console.log;
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();
const axios = require('axios');

const test = require('../service/groupService');
const mongo = require('../bin/mongoose');
require('dotenv').config();
mongo();

const groupSchema = require('../model/groupSchema');

const testGroup = new groupSchema({
  name: 'Hello',
  members: ['물총총', '헬로우'],
  membersNum: 2,
});

describe('getGroup', async function () {
  before(() => {
    testGroup.save((err) => {
      if (err) return console.error(err);
      log('GROUP document Save!');
    });
  });

  after(() => {
    userSchema.remove({}, (err, res) => {
      if (err) return handleError(err);
      log(`GROUP Delete data!`);
    });
  });
});
