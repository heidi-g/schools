var knexConfig = require('./knexfile')
var knex = require('knex')(knexConfig[process.env.NODE_ENV || "development"])
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require ('fs');
var request = require('superagent');
var dotenv = require('dotenv').config();
var geolib = require('geolib')

console.log('hi from Server.js')

var app = express();

var note = process.argv[2]
function location() {
  return knex.raw('SELECT id,name,telephone,email,principal,street,suburb,city,longitude,latitude FROM "schools" WHERE longitude IS NOT NULL ;')
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));


app.get('/', function(req, res) {
   res.redirect('/home')
 });

app.get('/home', function(req, res) {
 res.render('home')
});

app.post('/schools', function(req, res) {
  location()
  .then(function(schoolsList){
    console.log('schoolsList:', schoolsList.rows.sort)
      var sortedSchools = schoolsList.rows.sort(function(a,b) {
        var aDistance = geolib.getDistance(a, req.body)
        var bDistance = geolib.getDistance(b, req.body)
        if (aDistance > bDistance) return 1
          if (aDistance < bDistance) return -1
            return 0
        })
      return sortedSchools.slice(0,5)
    })
    .then(function(schoolsList){
     res.render('schools', {schools: schoolsList})
   })
});




app.get('/school_details/:id', function(req, res) {
  location()
  .then(function(schoolDetails){
    var school = schoolDetails.rows.filter(function(school){
      return req.params.id == school.id
    })[0]
    res.render('school_details', school)
  })
})


module.exports = app;

