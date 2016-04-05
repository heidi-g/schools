var express = require('express');
var path = require('path');// addresses in a file system
var bodyParser = require('body-parser');
var fs = require ('fs'); /// ask Tony
var request = require('superagent')

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res) {
   res.redirect('/home') // what is this doing?
})

app.get('/home', function(req, res) {
 res.render('schools')
})

app.get('/schools', function(req, res) {
  res.render('school_details')

})
module.exports = app;
