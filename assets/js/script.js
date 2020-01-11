
$(document).ready(function () {
    mapboxgl.accessToken = 'pk.eyJ1IjoibGF3bmExMiIsImEiOiJjazU3ZXdrcjYwMzVuM2VtN25wanM5eGh4In0.tVXQj-3Lrl58e2SmJgyjmw';

    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
        center: [-74.5, 40], // starting position [lng, lat]
        zoom: 9 // starting zoom

    });


    var geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    });

    var geolocator = $('#geocoder');
    geolocator.append(geocoder.onAdd(map));
    $('#map').append(geolocator);




});