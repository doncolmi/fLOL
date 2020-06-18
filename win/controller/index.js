var express = require('express');
var router = express.Router();
const toastService = require('../service/toastService');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.json(process.env.LOL_KEY);
});

router.get('/toast/:name', async function (req, res, next) {
  res.json(await toastService.getToastList(req.params.name));
});

module.exports = router;
