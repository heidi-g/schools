var $ = require("jquery")
var Promise = require("promisify")

// $( document ).ready(function() {


});
getGeolocation is the eventListener.


module.exports = {
  getGeolocation: function(){/// start of geolocator
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        currentLat = position.coords.latitude
        currentLong = position.coords.longitude
        $("#lat").val(currentLat)
        $("#lng").val(currentLong)
        console.log(currentLat, "latitude", currentLong, "currentLong")
      });
    }
  }//end of geolocator
}


// calculate distance between two points.

 // var p1 = new google.maps.LatLng(-41.29690919999999, 174.77421930000003);
 // var p2 = new google.maps.LatLng(-41.2969211, 174.7737855);


 // function calcDistance(p1, p2) {
 //  return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2));
 // }


// start of "calculate distance between two points"

//   var currentLocation = new google.maps.LatLng(-41.29690919999999, 174.77421930000003);
//   var schoolLocation = new google.maps.LatLng(-41.2969211, 174.7737855);

//   function calcDistance(currentLocation, schoolLocation) {
//     return (google.maps.geometry.spherical.computeDistanceBetween(currentLocation, schoolLocation));
//   }


// function getGeolocationPromise (getGeolocation){
//     return new Promise(function(resolve, reject){

//   })
// }



