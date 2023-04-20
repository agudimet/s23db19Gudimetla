var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var itRouter = require('./routes/it');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');

var IT = require("./models/it");
var resourceRouter=require("./routes/resourse");
require('dotenv').config();
const connectionString = process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")})
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/it', itRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);

app.use('/its', itRouter);
app.use('/resourse', resourceRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

async function recreateDB() {
  // Delete everything
  await IT.deleteMany();
  
  // Add new instances
  let instance1 = new IT({ company: 'AMAZON', experience: 2, salary: 40000 });
  let instance2 = new IT({ company: 'Capgemini', experience: 4, salary: 20000 });
  let instance3 = new IT({ company: 'TCS', experience: 4, salary: 30000 });
  
  instance1.save().then(doc=>{
    console.log("First object saved"+doc)
     }).catch(err=>{
    console.error(err)
    });
    instance2.save().then(doc=>{
      console.log("First object saved"+doc)
    }).catch(err=>{
      console.error(err)
      });
      instance3.save().then(doc=>{
        console.log("First object saved"+doc)
      }).catch(err=>{
        console.error(err)
        });
  
  console.log('Data seeded successfully!');
}
let reseed = true;
if (reseed) { recreateDB(); }


module.exports = app;
