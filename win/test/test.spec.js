const test = require('../service/userService');
const chai = require('chai');

const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

require('dotenv').config();
const mongo = require('../bin/mongoose');
mongo();

describe('getUser', function () {
  it('getUser', async function () {
    const user = await test.getUser('물총총');
    assert.equal(user.name, '물총총');
  });
});
