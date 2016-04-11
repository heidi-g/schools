var map
var infoWindow
var service
var currentLat
var currentLong
var pos

// directions.
console.log('loading')
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

      });
    console.log(pos, "current positon")
    console.log(currentLat, "current Lat")
    console.log(currentLong, "current Long")
  });
}//end of geolator and marker
}


// var directionsDisplay;
// var directionsService = new google.maps.DirectionsService();

// function initialize() {
//   directionsDisplay = new google.maps.DirectionsRenderer();
//   var chicago = new google.maps.LatLng(41.850033, -87.6500523);
//   var mapOptions = {
//     zoom:7,
//     center: chicago
//   }
//   // map = new google.maps.Map(document.getElementById("map"), mapOptions);
//   // directionsDisplay.setMap(map);
//   // directionsDisplay.setPanel(document.getElementById("directionsPanel"));
// }

// function calcRoute() {
//   var start = "15 Allen St, Te Aro, Wellington 6011";
//   var end = pos; //defined above
//   var request = {
//     origin:start,
//     destination:end,
//     travelMode: google.maps.TravelMode.DRIVING
//   };
//   directionsService.route(request, function(response, status) {
//     if (status == google.maps.DirectionsStatus.OK) {
//       directionsDisplay.setDirections(response);
//     }
//   });
// }

}
