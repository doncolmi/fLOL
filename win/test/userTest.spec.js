const log = console.log;
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();
const axios = require('axios');

const test = require('../service/userService');
const mongo = require('mongoose');
require('dotenv').config();

const userSchema = require('../model/userSchema');

describe('userTest', async function () {
  before(() => {
    return mongo.connect(`mongodb://flol:1234@localhost:27017/flol`, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex : true,
      useUnifiedTopology: true
    }).then(() => console.log("헬로우"));
  });

  it('getUserCheckName', async function () {
    const { name } = await test.getUser('물총총');
    console.log(name);
    assert.deepEqual(name, '물총총', 'user.name과 닉네임이 같은가?');
  });

  it('getUserCheckLevel', async function () {
    const { level } = await test.getUser('물총총');
    assert.isNumber(level);
  });

  it('getUserMongoCheckedId', function (done) {

    userSchema.countDocuments({ name: '물총총' }, (err, count) => {
      if (count > 0) {
        log(`count is ${count}!`);
        done();
      }
    });
  });

  it('getUserMongoModifiedDate', async function () {
    await userSchema.findOne(
      { name: '물총총' },
      'modifiedDate',
      (err, user) => {
        if (err) return handleError(err);
        const elapsed = Date.now() - user.modifiedDate.getTime() / 1000;
        assert.isBoolean(elapsed > 300);
      }
    );
  });

  it('saveAndReadUser', async function () {
    const testUser = await test.getUser('물총총');
    assert.isObject(testUser);
  });

  it('deleteUser', async function() {
    const testUser = await test.getUser('물총총');
    testUser.deleteOne();
  });

  after((done) => {
    return mongo.disconnect(done);
  });
});