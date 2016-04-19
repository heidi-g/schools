var $ = require("jquery")

// $( document ).ready(function() {

//     console.log(calcDistance(p1, p2));
// });

module.exports = {
  getGeolocation: function(){
    if (navigator.geolocation) { /// start of geolocator
      navigator.geolocation.getCurrentPosition(function(position) {
        currentLat = position.coords.latitude
        currentLong = position.coords.longitude
        $("#lat").val(currentLat)
        $("#lng").val(currentLong)
        console.log(currentLat, "latitude", currentLong, "currentLong")
      });
    }  //end of
  }
} //getGeolocation is the eventListener.


