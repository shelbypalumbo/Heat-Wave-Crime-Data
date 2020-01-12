$(document).ready(function () {
    
    var getCity = function(place) {
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + place + "&units=imperial" + "&apikey=4d721e459b51eed9d4d8047d079984e6";

        $.ajax({
            url:queryURL,
            method:"GET"
        }).then(function(response) {
            console.log(response);
            var latitude = response.coord.lat;
            var longitude = response.coord.lon;

            mapboxgl.accessToken = 'pk.eyJ1IjoibGF3bmExMiIsImEiOiJjazU3ZXdrcjYwMzVuM2VtN25wanM5eGh4In0.tVXQj-3Lrl58e2SmJgyjmw';
            
            var map = new mapboxgl.Map({
                container: 'map', // container id
                style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
                center: [longitude, latitude], // starting position [lng, lat]
                zoom: 12 // starting zoom
            });
            var geocoder = new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl
            });

            var geolocator = $('#geocoder');
            geolocator.append(geocoder.onAdd(map));
            $('#map').append(geolocator);

            map
        });
    };

    getCity("Manhattan");


});