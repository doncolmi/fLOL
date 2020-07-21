const express = require('express');
const router = express.Router();

const groupService = require('../service/groupService');

/* GET home page. */

router.get('/:code', async function (req, res, next) {
  res.json(await groupService.getGroup(req.params.code));
});

router.post('/', async function (req, res, next) {
  res.json(await groupService.saveGroup(req.body));
});

router.get('/search/:keyword', async function (req, res, next) {
  res.json(await groupService.countSearchGroup(req.params.keyword));
});

router.post('/search', async function (req, res, next) {
  res.json(await groupService.searchGroup(req.body.keyword, req.body.page));
});

router.post('/auth', async function (req, res, next) {
  res.json(await groupService.authGroup(req.body));
});

router.post('/admin', async function (req, res, next) {
  res.json(await groupService.adminAuthGroup(req.body));
});

module.exports = router;
