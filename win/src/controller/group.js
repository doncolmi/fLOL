const express = require('express');
const router = express.Router();

const groupService = require('../service/groupService');
const noticeService = require('../service/noticeService');

/* GET home page. */

router.post('/notice', async function (req, res, next) {
  try {
    await noticeService.auth(req.headers.authorization, req.body.code);
    await noticeService.save(req.body);
  } catch {
    res.status(403).json('권한이 없습니다.');
  }
});

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
  try {
    res.json(await groupService.authGroup(req.body));
  } catch (err) {
    res.status(403).json({ error: err.toString() });
  }
});

router.post('/admin', async function (req, res, next) {
  try {
    res.json(await groupService.adminAuthGroup(req.body));
  } catch (err) {
    res.status(403).json({ error: err.toString() });
  }
});

module.exports = router;
