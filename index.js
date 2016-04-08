var express = require('express');
var path = require('path');// addresses in a file system
var bodyParser = require('body-parser');
var fs = require ('fs'); /// ask Tony
var request = require('superagent');
var dotenv = require('dotenv').config();
// require dotenv - look at npm docs for this

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'stylesheet')));


app.get('/', function(req, res) {
   res.redirect('/home') // what is this doing?
})

app.get('/home', function(req, res) {
 res.render('home')
})

app.post('/schools', function(req, res) {
  console.log(req.body.name)
  var location = req.body.name

  // find schools in the nearby area usign this location,
  // create and object with these schools in (or save them to db)
  // pass them into schools tamplate, so that schools can render them
  // suggest using handlebars, then using {{#each}} to iterate through the school to display them in the view



  res.render('schools')
})

// when school details
app.get('/school_details/:id', function(req, res) {
  var key = process.env.GOOGLE_MAPS_API
  res.render('school_details')
})


module.exports = app;

