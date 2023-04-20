var IT = require('../models/it');

// Handle a show one view with id specified by query
exports.it_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await IT.findById( req.query.id)
    res.render('itdetail',
   { title: 'IT Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.it_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('itcreate', { title: 'IT Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for updating a costume.
// query provides the id
exports.it_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await IT.findById(req.query.id)
    res.render('itupdate', { title: 'IT Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle a delete one view with id from query
exports.it_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await IT.findById(req.query.id)
    res.render('itdelete', { title: 'IT Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };