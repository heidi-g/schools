




var Center = new google.maps.LatLng(18.210885, -67.140884);
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var properties = {
    center: Center,
    zoom: 20,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };

  map = new google.maps.Map(document.getElementById("map"), properties);
  directionsDisplay.setMap(map);

  var marker = new google.maps.Marker({
    position: Center,
   });

  marker.setMap(map);
  Route();
}

function Route() {

  var start = new google.maps.LatLng(18.210885, -67.140884);
  var end = new google.maps.LatLng(18.211685, -67.141684);
  var request = {
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode.DRIVING //CHECK IT OUT
  };
  directionsService.route(request, function(result, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(result);
    } else {
      alert("couldn't get directions:" + status);
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

async defer
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBaKgR9OOeCwqez-NGNGNtIA7d4JjODHfg&callback=initMap">
