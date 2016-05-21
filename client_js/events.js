var $ = require("jquery")
var Promise = require("promisify")

module.exports = {
  getGeolocation: function(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        currentLat = position.coords.latitude
        currentLong = position.coords.longitude
        $("#lat").val(currentLat)
        $("#lng").val(currentLong)
        console.log(currentLat, "latitude", currentLong, "currentLong")
      });
    }
  }
}
