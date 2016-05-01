'use strict';

var test = require('tape');
var server = require('../server');
var client = require('../client_js/events');
var www = require('../bin/www');
var request = require('supertest')
var port = process.env.PORT || 3000;
// var googleDirections = require('../public/googleDirections')

test('basic arithmetic', function (t) {
    t.plan(2);
    t.equal(2 + 3, 5);
    t.equal(7 * 8 + 9, 65);
    t.end()
});

test('first test', function(t){

t.end()
});

test('Correct users returned', function (t) {
  request(server)
    .get('/api/users')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
      t.end();
    });
});
