const express = require('express');
const router = express.Router();

const groupService = require('../service/groupService');
const noticeService = require('../service/noticeService');

/* GET home page. */

const authFunction = (req, res, next) => {
  noticeService
    .auth(req.headers.authorization, req.params.code)
    .then((r) => {
      next();
    })
    .catch((err) => res.status(403).json('권한이 없습니다.'));
};

router.post('/notice', function (req, res, next) {
  noticeService
    .auth(req.headers.authorization, req.body.code)
    .then((r) => {
      noticeService
        .save(req.body)
        .then((suc) => res.status(200).json(true))
        .catch((err) => res.status(404).json(false));
    })
    .catch((err) => res.status(403).json('권한이 없습니다.'));
});

router.get('/:code', async function (req, res, next) {
  res.json(await groupService.getGroup(req.params.code));
});

router.get('/:code/notice', async function (req, res, next) {
  noticeService
    .get(req.params.code, req.query.page)
    .then((notice) => res.json(notice))
    .catch((err) => res.status(500).json(err));
});

router.get('/:code/notice/max', authFunction, function (req, res) {
  noticeService
    .max(req.params.code)
    .then((notice) => res.json(notice))
    .catch((err) => res.status(500).json(err));
});

router.delete('/:code/notice', authFunction, function (req, res) {
  noticeService
    .delete(req.params.id)
    .then((notice) => res.json(notice))
    .catch((err) => res.status(500).json(err));
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
