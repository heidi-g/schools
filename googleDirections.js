var map;
var infoWindow;
var service;
var currentLat;
var currentLong;
var pos
var clickForLocation = document.getElementById("geoLocation")

// directions.

function initMap() {
map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: currentLat, lng: currentLong},
    zoom: 15,
    styles: [{
      stylers: [{ visibility: 'complex' }]
    }, {
      elementType: 'labels',
      stylers: [{ visibility: 'on' }]
    }]
  });

if (navigator.geolocation) { /// start of geolocator
  navigator.geolocation.getCurrentPosition(function(position) {
    currentLat = position.coords.latitude
    currentLong = position.coords.longitude
    pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    map.setCenter(pos);
      var marker = new google.maps.Marker({
       position:pos,
       map: map
        //end of
      });
    console.log(pos, "current positon")
    console.log(currentLat, "current Lat")
    console.log(currentLong, "current Long")
  });

}

  var directionsDisplay = new google.maps.DirectionsRenderer;
  var directionsService = new google.maps.DirectionsService;
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: pos
  });
  directionsDisplay.setMap(map);

  var onChangeHandler = function() {
    calculateAndDisplayRoute(directionsService, directionsDisplay);
  };
}
console.log("line 67***********************")

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
  var start = pos
  var end = "15 Allen St, Te Aro, Wellington 6011"
  directionsService.route({
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode.DRIVING
  }, function(response, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}
