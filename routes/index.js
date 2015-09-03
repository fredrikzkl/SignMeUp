var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'SignMeUp' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('pages/about', { title: 'SignMeUp' });
});

module.exports = router;
