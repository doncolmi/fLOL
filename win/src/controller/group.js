var express = require('express');
var router = express.Router();
const groupService = require('../service/groupService');

/* GET home page. */
router.post('/', async function (req, res, next) {
  res.json(await groupService.saveGroup(req.body));
});

module.exports = router;
