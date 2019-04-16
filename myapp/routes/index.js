var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'the new and improved meme review. zero deaths, guys.' });
});

module.exports = router;
