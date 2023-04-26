var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var it_controller = require('../controllers/itController');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

 
router.post('/it', it_controller.it_create_post);
// DELETE request to delete it.
router.delete('/it/:id', it_controller.it_delete);
// PUT request to update it.
router.put('/it/:id', it_controller.it_update_put);
// GET request for one it.
router.get('/it/:id', it_controller.it_detail);
// GET request for list of all it items.
router.get('/it', it_controller.it_list);
module.exports = router