var express = require('express');
var router = express.Router();
const toastService = require('../service/toastService');
const searchService = require('../service/searchService');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json(process.env.LOL_KEY);
});

router.get('/toast/:name', async function (req, res, next) {
  res.json(await toastService.getToastList(req.params.name));
});

router.get('/today', async function (req, res, next) {
  res.json(await searchService.getTodayFirstUser());
});

router.get('/today/:today', async function (req, res, next) {
  res.json(await searchService.isTodayFirstUser(req.params.today));
});

router.post('/today', async function (req, res, next) {
  res.json(await searchService.saveTodayFirstUser(req.body));
});

module.exports = router;
