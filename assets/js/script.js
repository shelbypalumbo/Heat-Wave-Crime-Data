$(document).ready(function () {
    // initialize global variables
    var input = "";
    $(document).on("click", ".dropdown-item", function() {
        var thisIndex = $(this).attr("data-index");
        mapboxgl.accessToken = 'pk.eyJ1IjoibGF3bmExMiIsImEiOiJjazU3ZXdrcjYwMzVuM2VtN25wanM5eGh4In0.tVXQj-3Lrl58e2SmJgyjmw';
            
            // mapbox API call
            var map = new mapboxgl.Map({
                container: 'map', // container id
                style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
                center: [stateCapitals[thisIndex].long, stateCapitals[thisIndex].lat], // starting position [lng, lat]
                zoom: 12 // starting zoom
            });
        map
        var fbi = function(abbreviation) {
            var queryURL = "https://api.usa.gov/crime/fbi/sapi/api/nibrs/homicide/offender/states/" + abbreviation + "/count?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv";
    
            $.ajax({
                url:queryURL,
                method:"GET"
            }).then(function(response) {
                var recentYear = response.data.length - 1;
                console.log(abbreviation + " state ");
                console.log(response.data[recentYear]);
    
                
    
                var murdersPer = response.data[recentYear].value / stateCapitals[thisIndex].population;
                
    
                $("#homicides").text("Homicides: " + response.data[recentYear].value);
                $("#hPerCapita").text("Homicides per Capita: " + murdersPer);
    
                
            })
        }
        fbi(stateCapitals[thisIndex].abbreviation);

    });
    
    // when user selects a state from the dropdown menu, map appears
    $(".dropdown-toggle").on("click", function() {
        $(".dropdown-menu").empty();
        for (var i = 0; i < stateCapitals.length; i++) {
            var stateName = $("<button>").addClass("dropdown-item");
            stateName.attr("data-index", i);
            stateName.text(stateCapitals[i].state);
            $(".dropdown-menu").append(stateName);
            
        }
    })
    


    
    
var stateAbbreviations = ["AL", "AZ", "AR", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY",]
// for (var i = 0; i < stateAbbreviations.length; i++) {
//     fbi(stateAbbreviations[i]);
// }
    
    // end document ready ----------------------------------------------------------------------- 
});

    // code to make map appear using user input and search button START
    /*    
    
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

        var capitalsCall = function() {
        var queryURL = "https://gist.githubusercontent.com/jpriebe/d62a45e29f24e843c974/raw/b1d3066d245e742018bce56e41788ac7afa60e29/us_state_capitals.json"
        $.ajax({
            url:queryURL,
            method:"GET"
        }).then(function(response) {
          console.log(response);
        });
    }

    */
    // code to make map appear using user input and search button END
    

