const log = console.log;
const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();
const axios = require('axios');

const test = require('../src/service/toastService');
const mongo = require('mongoose');
require('dotenv').config();

const toastSchema = require('../src/model/schema/toastSchema');

describe('toastTest', async function () {
  before(() => {
    return mongo.connect(`mongodb://flol:1234@localhost:27017/flol`, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
  });

  it('getToast', async function () {
    const toast = await test.getToastList('silverGold');
    assert.isObject(toast);
  });

  after((done) => {
    return mongo.disconnect(done);
  });
});
