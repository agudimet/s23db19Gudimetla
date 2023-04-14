var IT = require('../models/it');
// List of all its
exports.it_list = async function(req, res) {
    try{
    theITs = await IT.find();
    res.send(theITs);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };
// for a specific it.
exports.it_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: it detail: ' + req.params.id);
};
// Handle it create on POST.

exports.it_create_post = async function(req, res) {
    console.log(req.body)
    let document = new IT();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.company = req.body.company;
    document.experience = req.body.experience;
    document.salary = req.body.salary;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   }
// Handle it delete form on DELETE.
exports.it_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: it delete DELETE ' + req.params.id);
};
// Handle it update form on PUT.
exports.it_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: it update PUT' + req.params.id);
}

exports.it_view_all_Page = async function(req, res) {
    try{
    theITs = await IT.find();
    res.render('its', { title: 'IT Search Results', results: theITs });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };