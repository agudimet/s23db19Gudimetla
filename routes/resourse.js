var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var it_controller = require('../controllers/itController');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);

 
router.post('/its', it_controller.it_create_post);
// DELETE request to delete it.
router.delete('/its/:id', it_controller.it_delete);
// PUT request to update it.
router.put('/its/:id', it_controller.it_update_put);
// GET request for one it.
router.get('/its/:id', it_controller.it_detail);
// GET request for list of all it items.
router.get('/its', it_controller.it_list);
module.exports = router