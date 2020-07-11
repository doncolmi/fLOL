const express = require('express');
const router = express.Router();
const userService = require('../service/userService');

/* GET users listing. */
router.get('/:name', async function (req, res, next) {
  res.json(await userService.getUser(req.params.name));
});

router.put('/:accountId', async function (req, res, nex) {
  res.json(await userService.updateUser(req.params.accountId));
});

module.exports = router;
