$(document).ready(function () {
    // initialize global variables
    var input = "";
    $(document).on("click", ".dropdown-item", function() {
        // 
        mapboxgl.accessToken = 'pk.eyJ1IjoibGF3bmExMiIsImEiOiJjazU3ZXdrcjYwMzVuM2VtN25wanM5eGh4In0.tVXQj-3Lrl58e2SmJgyjmw';
            
            // mapbox API call
            var map = new mapboxgl.Map({
                container: 'map', // container id
                style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
                center: [stateCapitals[0].long, stateCapitals[0].lat], // starting position [lng, lat]
                zoom: 12 // starting zoom
            });
        map
    });
//------------------------------------------------------------------------------------------
    var stateCapitals = [
        AL = {
          capital: "Montgomery",
          state: "Alabama",
          lat: 32.361538,
          long: -86.279118
        },
        AK = {
          capital: "Juneau",
          state: "Alaska",
          lat: 58.301935,
          long: -134.419740
        },
        AZ = {
          capital: "Phoenix",
          state: "Arizona",
          lat: 33.448457,
          long: -112.073844
        },
        AR = {
          capital: "Little Rock",
          state: "Arkansas",
          lat: 34.736009,
          long: -92.331122
        },
        CA = {
          capital: "Sacramento",
          state: "California",
          lat: 38.555605,
          "long": -121.468926
        },
        CO = {
          capital: "Denver",
          state: "Colorado",
          lat: 39.7391667,
          long: -104.984167
        },
        CT = {
          capital: "Hartford",
          state: "Connecticut",
          lat: 41.767,
          long: -72.677
        },
        DE = {
          capital: "Dover",
          state: "Delaware",
          lat: 39.161921,
          long: -75.526755
        },
        FL = {
          capital: "Tallahassee",
          state: "Florida",
          lat: 30.4518,
          long: -84.27277
        },
        GA = {
          capital: "Atlanta",
          state: "Georgia",
          lat: 33.76,
          long: -84.39
        },
        HI = {
          capital: "Honolulu",
          state: "Hawaii",
          lat: 21.30895,
          long: -157.826182
        },
        ID = {
          capital: "Boise",
          state: "Idaho",
          lat: 43.613739,
          long: -116.237651
        },
        IL = {
          capital: "Springfield",
          state: "Illinois",
          lat: 39.783250,
          long: -89.650373
        },
        IN = {
          capital: "Indianapolis",
          state: "Indiana",
          lat: 39.790942,
          long: -86.147685
        },
        IA = {
          capital: "Des Moines",
          state: "Iowa",
          lat: 41.590939,
          long: -93.620866
        },
        KS = {
          capital: "Topeka",
          state: "Kansas",
          lat: 39.04,
          long: -95.69
        },
        KY = {
          capital: "Frankfort",
          state: "Kentucky",
          lat: 38.197274,
          long: -84.86311
        },
        LA = {
          capital: "Baton Rouge",
          state: "Louisiana",
          lat: 30.45809,
          long: -91.140229
        },
        ME = {
          capital: "Augusta",
          state: "Maine",
          lat: 44.323535,
          long: -69.765261
        },
        MD = {
          capital: "Annapolis",
          state: "Maryland",
          lat: 38.972945,
          long: -76.501157
        },
        MA = {
          capital: "Boston",
          state: "Massachusetts",
          lat: 42.2352,
          long: -71.0275
        },
        MI = {
          capital: "Lansing",
          state: "Michigan",
          lat: 42.7335,
          long: -84.5467
        },
        MN = {
          capital: "Saint Paul",
          state: "Minnesota",
          lat: 44.95,
          long: -93.094
        },
        MS = {
          capital: "Jackson",
          state: "Mississippi",
          lat: 32.320,
          long: -90.207
        },
        MO = {
          capital: "Jefferson City",
          state: "Missouri",
          lat: 38.572954,
          long: -92.189283
        },
        MT = {
          capital: "Helana",
          state: "Montana",
          lat: 46.595805,
          long: -112.027031
        },
        NE = {
          capital: "Lincoln",
          state: "Nebraska",
          lat: 40.809868,
          long: -96.675345
        },
        NV = {
          capital: "Carson City",
          state: "Nevada",
          lat: 39.160949,
          long: -119.753877
        },
        NH = {
          capital: "Concord",
          state: "New Hampshire",
          lat: 43.220093,
          long: -71.549127
        },
        NJ = {
          capital: "Trenton",
          state: "New Jersey",
          lat: 40.221741,
          long: -74.756138
        },
        NM = {
          capital: "Santa Fe",
          state: "New Mexico",
          lat: 35.667231,
          long: -105.964575
        },
        NY = {
          capital: "Albany",
          state: "New York",
          lat: 42.659829,
          long: -73.781339
        },
        NC = {
          capital: "Raleigh",
          state: "North Carolina",
          lat: 35.771,
          long: -78.638
        },
        ND = {
          capital: "Bismarck",
          state: "North Dakota",
          lat: 48.813343,
          long: -100.779004
        },
        OH = {
          capital: "Columbus",
          state: "Ohio",
          lat: 39.962245,
          long: -83.000647
        },
        OK = {
          capital: "Oklahoma City",
          state: "Oklahoma",
          lat: 35.482309,
          long: -97.534994
        },
        OR = {
          capital: "Salem",
          state: "Oregon",
          lat: 44.931109,
          long: -123.029159
        },
        PA = {
          capital: "Harrisburg",
          state: "Pennsylvania",
          lat: 40.269789,
          long: -76.875613
        },
        RI = {
          capital: "Providence",
          state: "Rhode Island",
          lat: 41.82355,
          long: -71.422132
        },
        SC = {
          capital: "Columbia",
          state: "South Carolina",
          lat: 34.000,
          long: -81.035
        },
        SD = {
          capital: "Pierre",
          state: "South Dakota",
          lat: 44.367966,
          long: -100.336378
        },
        TN = {
          capital: "Nashville",
          state: "Tennessee",
          lat: 36.165,
          long: -86.784
        },
        TX = {
          capital: "Austin",
          state: "Texas",
          lat: 30.266667,
          long: -97.75
        },
        UT = {
          capital: "Salt Lake City",
          state: "Utah",
          lat: 40.7547,
          long: -111.892622
        },
        VT = {
          capital: "Montpelier",
          state: "Vermont",
          lat: 44.26639,
          long: -72.57194
        },
        VA = {
          capital: "Richmond",
          state: "Virginia",
          lat: 37.54,
          long: -77.46
        },
        WA = {
          capital: "Olympia",
          state: "Washington",
          lat: 47.042418,
          long: -122.893077
        },
        WV = {
          capital: "Charleston",
          state: "West Virginia",
          lat: 38.349497,
          long: -81.633294
        },
        WI = {
          capital: "Madison",
          state: "Wisconsin",
          lat: 43.074722,
          long: -89.384444
        },
        WY = {
          capital: "Cheyenne",
          state: "Wyoming",
          lat: 41.145548,
          long: -104.802042
        }
    ]
    
    // when user selects a state from the dropdown menu, map appears
    $(".dropdown-toggle").on("click", function() {
        $(".dropdown-menu").empty();
        for (var i = 0; i < stateCapitals.length; i++) {
            var stateName = $("<button>").addClass("dropdown-item");
            stateName.text(stateCapitals[i].state);
            $(".dropdown-menu").append(stateName);
            console.log(stateCapitals[i].state);
        }
    })
    
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

        this function takes a location input and makes a call to the openweathermap API...
        ...then uses the returned latitude & longitude as inputs for the initilization of the map from mapbox
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

    */
    // code to make map appear using user input and search button END
    

