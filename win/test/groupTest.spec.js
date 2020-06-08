const log = console.log;
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();
const axios = require('axios');

const test = require('../service/groupService');
const userTest = require('../service/userService');
const mongo = require('mongoose');
require('dotenv').config();

const groupSchema = require('../model/groupSchema');

const testGroup = new groupSchema({
  name: 'Hello',
  code: '3XSVHA',
  members: ['test'],
  membersNum: 1,
  open: true,
  password: 'pass',
  adminPassword: 'pass',
  salt: 'pass',
});

describe('groupTest', async function () {
  before(() => {
    return mongo.connect(`mongodb://flol:1234@localhost:27017/flol`, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
  });

  it('saveGroup', async function () {
    testGroup.save();
    const group = await groupSchema.findOne({ name: 'Hello' });
    assert.isObject(group);
  });

  it('addAndRemoveMember', async function () {
    this.timeout(15000);
    const memberArr = ['물총총', 'hideonbush', '깜짝 돌진', '박정훈 발때'];
    const memberDataArr = [];
    for (const item of memberArr) {
      const code = await userTest.getUser(item);
      memberDataArr.push(code.encryptedAccountId);
    }

    const updateList = {
      addMember: memberDataArr,
      removeMember: ['test'],
    };

    if (await test.updateMemberList('Hello', updateList)) {
      const group = await groupSchema.findOne({ name: 'Hello' });
      assert.notInclude(group.members, 'test');
    }
  });

  it('updateUser', function (done) {
    this.timeout(10000);
    groupSchema.findOne({ name: 'Hello' }).then(({ members }) => {
      let percent = 0;
      let increase = 100 / members.length;
      for (const item of members) {
        userTest
          .updateUser(item)
          .then((res) => {
            if (res) {
              percent += increase;
              if (res.err) log('3분안지남');
            }
            log(`${percent}%`);
            if (percent > 99) done();
          })
          .catch((err) => log(err));
      }
    });
  });

  it('changeGroupName', async function () {
    const group = await groupSchema.findOne({ name: 'Hello' });
    group.name = '이름 변경';
    const bam = await group.save();
    assert.deepEqual(bam.name, '이름 변경');
    bam.name = 'Hello';
    await bam.save();
  });

  it('deleteGroup', async function () {
    const group = await groupSchema.findOne({ name: 'Hello' });
    group.deleteOne();
  });

  after((done) => {
    return mongo.disconnect(done);
  });
});
