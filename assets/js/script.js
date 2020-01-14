$(document).ready(function () {
    // initialize global variables
    var input = "";
    
    // on-click to make map appear
    $(".success").on("click", function() {
        input = $("#city-input").val().trim();
        getCity(input);
    });

    // pressing 'enter' key to make map appear
    $("#city-input").keyup(function(event) {
        var code = event.which;
        input = $("#city-input").val().trim();
        if (code == 13) {
            event.preventDefault();
            getCity(input);
        }
    });

    // this function takes a location input and makes a call to the openweathermap API...
    // ...then uses the returned latitude & longitude as inputs for the initilization of the map from mapbox
    var getCity = function(place) {
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + place + "&units=imperial" + "&apikey=4d721e459b51eed9d4d8047d079984e6";

        $.ajax({
            url:queryURL,
            method:"GET"
        }).then(function(response) {
            console.log(response);
            var latitude = response.coord.lat;
            var longitude = response.coord.lon;

            //  mapbox access token
            mapboxgl.accessToken = 'pk.eyJ1IjoibGF3bmExMiIsImEiOiJjazU3ZXdrcjYwMzVuM2VtN25wanM5eGh4In0.tVXQj-3Lrl58e2SmJgyjmw';
            
            // mapbox API call
            var map = new mapboxgl.Map({
                container: 'map', // container id
                style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
                center: [longitude, latitude], // starting position [lng, lat]
                zoom: 12 // starting zoom
            });

            // adds mapbox searchbar using our access token
            // var geocoder = new MapboxGeocoder({
            //     accessToken: mapboxgl.accessToken,
            //     mapboxgl: mapboxgl
            // });

            // // appends mapbox searchbar to the map
            
            // var geolocator = $('#geocoder');
            // geolocator.append(geocoder.onAdd(map));
            // $('#map').append(geolocator);

            // calls the mapbox API
            map
        });
    };

    


});