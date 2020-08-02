const express = require('express');
const router = express.Router();

const groupService = require('../service/groupService');
const noticeService = require('../service/noticeService');

/* GET home page. */

const saveGroup = async (req, res) => {
  res.json(await groupService.saveGroup(req.body));
};

const authFunction = (req, res, next) => {
  noticeService
    .auth(req.headers.authorization, req.params.code)
    .then((r) => {
      next();
    })
    .catch((err) => res.status(403).json('권한이 없습니다.'));
};

const saveNotice = (req, res, next) => {
  noticeService
    .save(req.body)
    .then((save) => res.status(200).json(save))
    .catch((err) => res.status(404).json(err));
};

const getNotice = (req, res) => {
  noticeService
    .get(req.params.code, req.query.page)
    .then((notice) => res.json(notice))
    .catch((err) => res.status(500).json(err));
};

const getGroup = (req, res) => {
  groupService
    .getGroup(req.params.code)
    .then((group) => res.json(group))
    .catch((err) => res.status(404).json(err));
};

const getNoticeMax = (req, res) => {
  noticeService
    .max(req.params.code)
    .then((notice) => res.status(200).json(notice))
    .catch((err) => res.status(500).json(err));
};

const deleteNotice = (req, res) => {
  noticeService
    .delete(req.params.id)
    .then((notice) => res.json(notice))
    .catch((err) => res.status(500).json(err));
};

const searchGroup = (req, res) => {
  groupService
    .searchGroup(req.body.keyword, req.body.page)
    .then((groups) => res.json(groups))
    .catch((err) => res.status(500).json(err));
};

const countSearchGroup = (req, res) => {
  groupService
    .countSearchGroup(req.params.keyword)
    .then((cnt) => res.json(cnt))
    .catch((err) => res.status(500).json(err));
};

const authCloseGroup = (req, res) => {
  groupService
    .authGroup(req.body)
    .then((code) => res.json(code))
    .catch((err) => res.status(500).json(err));
};

const adminAuthGroup = (req, res) => {
  groupService
    .adminAuthGroup(req.body)
    .then((token) => res.json(token))
    .catch((err) => res.status(500).json(err));
};

router.post('/', saveGroup);
router.get('/:code', getGroup);
router.get('/:code/notice', getNotice);
router.post('/:code/notice', authFunction, saveNotice);
router.delete('/:code/notice', authFunction, deleteNotice);
router.get('/:code/notice/max', authFunction, getNoticeMax);
router.post('/search', searchGroup);
router.get('/search/:keyword', countSearchGroup);
router.post('/auth', authCloseGroup);
router.post('/admin', adminAuthGroup);

module.exports = router;
