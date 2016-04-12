var $ = require("jquery")


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
