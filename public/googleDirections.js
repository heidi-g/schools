var schoolLat = document.getElementById("lat").innerHTML
var schoolLng = document.getElementById("lng").innerHTML


  function getGeolocation(callback){
    if (navigator.geolocation) { /// start of geolocator
      navigator.geolocation.getCurrentPosition(function(position) {
        var currentLat = position.coords.latitude
        var currentLong = position.coords.longitude
        console.log(currentLat, "latitude", currentLong, "currentLong")
        callback(currentLat, currentLong)
      });

    }  //end of geolocator
  }

                  });
            console.log(pos, "current positon")
            console.log(currentLat, "current Lat")
            console.log(currentLong, "current Long")
          });
        }  //end of

    // The idle event is a debounced event, so we can query & listen without
  // throwing too many requests at the server.
}


    calculateAndDisplayRoute(directionsService, directionsDisplay, currentLat, currentLong);
  })


// var directionsDisplay;
// var directionsService = new google.maps.DirectionsService();

// function initialize() {
//   directionsDisplay = new google.maps.DirectionsRenderer();
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

