const log = console.log;
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();
const axios = require('axios');

const test = require('../service/userService');
const mongo = require('../bin/mongoose');
require('dotenv').config();
mongo();

const userSchema = require('../model/userSchema');

const testUser = new userSchema({
  ogName: 'test',
  name: 'test',
  encryptedId: 'test',
  encryptedAccountId: 'test',
  level: 1,
  rankTier: 'test',
  rankScore: 1,
  win: 1,
  lose: 1,
  etc: 'test',
  recentMatch: 'test',
  recentLane: 'test',
  recentChampion: 'test',
  recentWinLose: 'test',
});

describe('getUser', async function () {
  before(() => {
    testUser.save((err, res) => {
      if (err) return console.error(err);
      log(`document Save!`);
    });
  });

  it('getUserCheckName', async function () {
    const user = await test.getUser('물총총');
    assert.deepEqual(user.name, '물총총', 'user.name과 닉네임이 같은가?');
  });

  it('getUserCheckLevel', async function () {
    const user = await test.getUser('물총총');
    assert.isNumber(user.level);
  });

  it('getUserMongoCheckedId', function (done) {
    userSchema.countDocuments({ encryptedAccountId: 'test' }, (err, count) => {
      if (count > 0) {
        log(`count is ${count}!`);
        done();
      }
    });
  });

  it('getUserMongoModifiedDate', async function () {
    await userSchema.findOne(
      { encryptedAccountId: 'test' },
      'modifiedDate',
      (err, user) => {
        if (err) return handleError(err);
        const elapsed = Date.now() - user.modifiedDate.getTime() / 1000;
        assert.isBoolean(elapsed > 300);
      }
    );
  });

  it('saveUser', async function () {
    this.timeout(5000);
    const testUser = await test.getUser('물총총');
    log(testUser);
    assert.isObject(testUser);
  });

  after(() => {
    userSchema.remove({}, (err, res) => {
      if (err) return handleError(err);
      log(`Delete data!`);
    });
  });
});
