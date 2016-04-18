
// current location
var map;
var infoWindow;
var service;
var currentLat;
var currentLong;

var clickForLocation = document.getElementById("geoLocation")

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    // center: {lat: currentLat, lng: currentLong},
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
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            map.setCenter(pos);
                  var marker = new google.maps.Marker({
                   position:pos,
                   map: map

                  });
            console.log(pos, "current positon")
            console.log(currentLat, "current Lat")
            console.log(currentLong, "current Long")
          });
        }  //end of

    // The idle event is a debounced event, so we can query & listen without
  // throwing too many requests at the server.
}


var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
}

function calcRoute() {
  var start = "15 Allen St, Te Aro, Wellington 6011";
  var end = pos; //defined above
  var request = {
    origin:start,
    destination:end,
    travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}
