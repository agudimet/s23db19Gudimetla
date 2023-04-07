var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('it', { title: 'Search Results for IT Companies' });
});

module.exports = router;
