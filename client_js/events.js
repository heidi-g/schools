var $ = require("jquery")

$( document ).ready(function() {

    console.log(calcDistance(p1, p2));
});

module.exports = {
  getGeolocation: function(){
    if (navigator.geolocation) { /// start of geolocator
      navigator.geolocation.getCurrentPosition(function(position) {
        currentLat = position.coords.latitude
        currentLong = position.coords.longitude
        $("#lat").val(currentLat)
        $("#lng").val(currentLong)
      });
    }  //end of
  }
} //getGeolocation is the eventListener.


// calculate distance between two points.

var p1 = new google.maps.LatLng(-41.29690919999999, 174.77421930000003);
var p2 = new google.maps.LatLng(-41.2969211, 174.7737855);


function calcDistance(p1, p2) {
  return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2));
}

