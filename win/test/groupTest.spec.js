const log = console.log;
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();
const axios = require('axios');

const test = require('../service/groupService');
const mongo = require('mongoose');
require('dotenv').config();

const groupSchema = require('../model/groupSchema');

const testGroup = new groupSchema({
  name: 'Hello',
  members: ['물총총', '헬로우'],
  membersNum: 2,
  open: true,
  password: "pass",
  adminPassword: "pass",
  salt: "pass"
});

describe('groupTest', async function () {
  before(() => {
    return mongo.connect(`mongodb://flol:1234@localhost:27017/flol`, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex : true,
      useUnifiedTopology: true
    }).then(() => console.log("헬로우"));
  });

  it('saveGroup', async function() {
      testGroup.save();
      const group = await groupSchema.findOne({name : 'Hello'});
      log(group);
      assert.isObject(group);
  });

  it('deleteGroup', function(done) {
    const group = groupSchema.findOne({name : 'Hello'});
    try{
        group.deleteOne();
        done();
    } catch {
        console.log("지워지지 않음");
    }
  })

  after((done) => {
    return mongo.disconnect(done);
  });
});