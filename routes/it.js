var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('it', { title: 'Search Results for IT Companies' });
});

var it_controlers = require('../controllers/it_detail_controller');
var itcontroller=require('../controllers/itController');

router.get('/',itcontroller.it_view_all_Page)
router.get('/detail', it_controlers.it_view_one_Page);
router.get('/create', it_controlers.it_create_Page);
router.get('/update', it_controlers.it_update_Page);

 router.get('/delete', it_controlers.it_delete_Page);

module.exports = router;
