var map;
var infoWindow;
var service;
var currentLat;
var currentLong;
var $ = require('jquery') // does not work in views

var clickForLocation = document.getElementById("geoLocation")

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    // center: {lat: currentLat, lng: currentLong},
    zoom: 15,
    styles: [{
      stylers: [{ visibility: 'simplified' }]
    }, {
      elementType: 'labels',
      stylers: [{ visibility: 'on' }]
    }]
  });

if (navigator.geolocation) { /// start of geolocator
          navigator.geolocation.getCurrentPosition(function(position) {
            currentLat = position.coords.latitude
            currentLong = position.coords.longitude
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            map.setCenter(pos);
            console.log(pos, "current positon")
            console.log(currentLat, "current Lat")
            console.log(currentLong, "current Long")
          });
        }  //end of

    // The idle event is a debounced event, so we can query & listen without
  // throwing too many requests at the server.
}

global.initMap = initMap

function showPosition(position) {
    clickForLocation.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}

