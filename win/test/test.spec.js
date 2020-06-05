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



const getQueue = (queue) => {
  if (queue === '420') return '솔랭';
  if (queue === '430') return '일겜';
  if (queue === '440') return '자랭';
  if (queue === '450') return '칼바람';
  if (queue === '900') return '우르프';
  if (queue === '910') return '초월';
  if (queue === '920') return '포로왕';
  if (queue === '1200') return '돌격 넥서스';
  if (queue === '1010') return '칼바람';
  return '기타게임';
};

const testUser = new userSchema({
  ogName : 'test',
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

  after(() => {
    userSchema.deleteOne({ name: 'test' }, (err, res) => {
      if (err) return handleError(err);
      log(`Delete data!`);
    });
  });
});
