var listeners = require('./events.js')
var $ = require("jquery")

$(document).ready(function(){
  listeners.getGeolocation()
})

