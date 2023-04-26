const validator=require('validator')
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

exports.it_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await IT.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle it create on POST.

exports.it_create_post = async function(req, res) {
    console.log(req.body)
    let document = new IT();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"it_type":"goat", "cost":12, "size":"large"}
    document.company = req.body.company;
    
    if (!validator.isIn(req.body.experience, {minmin: 0, max: 10000000 })) {
        res.status(400);
        res.send(`{"error": "Insufficient experience value. experience should be more."}`);
        return;
    }
    document.experience = req.body.experience;
    
    if (!validator.isFloat(req.body.salary.toString(), { min: 0, max: 10000000 })) {
        res.status(400);
        res.send(`{"error": "Insufficient salary value. Salary should be between 0 and 10000000."}`);
        return;
    }
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
// exports.it_delete = function(req, res) {
//  res.send('NOT IMPLEMENTED: it delete DELETE ' + req.params.id);
// };
// Handle it update form on PUT.
//  exports.it_update_put = async function(req, res) {
//     console.log(`update on id ${req.params.id} with body
//     ${JSON.stringify(req.body)}`)
//      try {
//      let toUpdate = await IT.findById( req.params.id)
//      // Do updates of properties
//      if(req.body.company)
//      toUpdate.company = req.body.company;
//      if(req.body.experience) toUpdate.experience = req.body.experience;
//      if(req.body.salary) toUpdate.salary = req.body.salary;
//      let result = await toUpdate.save();
//      console.log("Sucess " + result)
//      res.send(result)
//      } catch (err) {
//      res.status(500)
//      res.send(`{"error": ${err}: Update for id ${req.params.id}
//     failed`);
//      }
//  }

// Handle it delete on DELETE.
exports.it_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await IT.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };

// Handle it update form on PUT.
exports.it_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await IT.findById( req.params.id)
 // Do updates of properties
 if(req.body.company)
 toUpdate.company = req.body.company;
 if(req.body.experience) toUpdate.experience = req.body.experience;
 if(req.body.salary) toUpdate.salary = req.body.salary;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

exports.it_view_all_Page = async function(req, res) {
    try{
        console.log("theITs11")
    theITs = await IT.find();
    console.log(theITs)
    res.render('it', { title: 'IT Search Results', result: theITs });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
   };