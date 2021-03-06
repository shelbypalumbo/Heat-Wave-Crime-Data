$(document).ready(function () {
    //Text fade in effect----------------------------------------------------------------------
    $('#page_effect').fadeIn(3000);
    //------------------------------------------------------------------------------------------

    // calling the mapbox API
    mapboxgl.accessToken = myAccessToken;
            
    // mapbox API call
    var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
        center: [-98.35, 39.5], // starting position [lng, lat]
        zoom: 3 // starting zoom
    });
    
    map

    // initialize global variables
    var natlHomicide = 4.96;

    $(document).on("click", ".dropdown-item", function() {
        var thisIndex = $(this).attr("data-index");
        
        // calling the mapbox API
        mapboxgl.accessToken = myAccessToken;
            
            // mapbox API call
            var map = new mapboxgl.Map({
                container: 'map', // container id
                style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
                center: [stateCapitals[thisIndex].centerLong, stateCapitals[thisIndex].centerLat], // starting position [lng, lat]
                zoom: stateCapitals[thisIndex].zoom // starting zoom
            });
        // writing FBI API call
        var fbi = function(abbreviation) {
            var queryURL = "https://api.usa.gov/crime/fbi/sapi/api/nibrs/homicide/offender/states/" + abbreviation + "/count?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv";
    
            $.ajax({
                url:queryURL,
                method:"GET"
            }).done(function(response) {
                
                var recentYear = response.data.length - 1;
                console.log(abbreviation + " state ");
                
                console.log(response.data[recentYear]);
                map
                

                // Cluster Map Layer begin --------------------------------------------------------------------------------
                
                map.addSource('homicides', {
                    type: 'geojson',
                    // Point to GeoJSON data. This example visualizes all M1.0+ earthquakes
                    // from 12/22/15 to 1/21/16 as logged by USGS' Earthquake hazards program.
                    data:
                        "https://knightmac19.github.io/geoJSON/homicides.geojson",
                    cluster: true,
                    clusterMaxZoom: 14, // Max zoom to cluster points on
                    clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
                });
        
                map.addLayer({
                    id: 'clusters',
                    type: 'circle',
                    source: 'homicides',
                    filter: ['has', 'point_count'],
                    paint: {
                        // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
                        // with three steps to implement three types of circles:
                        //   * Blue, 20px circles when point count is less than 100
                        //   * Yellow, 30px circles when point count is between 100 and 750
                        //   * Pink, 40px circles when point count is greater than or equal to 750
                        'circle-color': [
                            'step',
                            ['get', 'point_count'],
                            '#51bbd6',
                            100,
                            '#f1f075',
                            300,
                            '#f28cb1'
                        ],
                        'circle-radius': [
                            'step',
                            ['get', 'point_count'],
                            20,
                            100,
                            30,
                            300,
                            40
                        ]
                    }
                });
        
                map.addLayer({
                    id: 'cluster-count',
                    type: 'symbol',
                    source: 'homicides',
                    filter: ['has', 'point_count'],
                    layout: {
                        'text-field': '{point_count_abbreviated}',
                        'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
                        'text-size': 12
                    }
                });
        
                map.addLayer({
                    id: 'unclustered-point',
                    type: 'circle',
                    source: 'homicides',
                    filter: ['!', ['has', 'point_count']],
                    paint: {
                        'circle-color': '#11b4da',
                        'circle-radius': 4,
                        'circle-stroke-width': 1,
                        'circle-stroke-color': '#fff'
                    }
                });
        
                // inspect a cluster on click
                map.on('click', 'clusters', function(e) {
                    var features = map.queryRenderedFeatures(e.point, {
                        layers: ['clusters']
                    });
                    var clusterId = features[0].properties.cluster_id;
                    map.getSource('homicides').getClusterExpansionZoom(
                        clusterId,
                        function(err, zoom) {
                            if (err) return;
        
                            map.easeTo({
                                center: features[0].geometry.coordinates,
                                zoom: zoom
                            });
                        }
                    );
                });
        
                map.on('mouseenter', 'clusters', function() {
                    map.getCanvas().style.cursor = 'pointer';
                });
                map.on('mouseleave', 'clusters', function() {
                    map.getCanvas().style.cursor = '';
                });

            
            //    Cluster Map Layer end --------------------------------------------------------------------------------
                // console.log(response);
                console.log(response.data[recentYear]);
                var stateHomicides = ""
                if (response.data.length < 1) {
                    stateHomicides = 0
                    $("#homicides").text(stateCapitals[thisIndex].state + " Homicides: N/A");
                    $("#hPerCapita").text(stateCapitals[thisIndex].abbreviation + " Homicides per 100,000: N/A");
                    $("#national").text("National Homicides per 100,000: " + natlHomicide);
                } else {
                    var murders = parseFloat(response.data[recentYear].value / stateCapitals[thisIndex].population) * 100000;
                    var murdersper = murders.toFixed(2);
                    stateHomicides = parseFloat(murdersper);
                    console.log("state Homicides + 100");
                    console.log(stateHomicides + 100);
                    
                
                    $("#crime-header").text("2018 Homicides");
                    $("#homicides").text(stateCapitals[thisIndex].state + " Homicides: " + response.data[recentYear].value);
                    $("#hPerCapita").text(stateCapitals[thisIndex].abbreviation + " Homicides per 100,000: " + stateHomicides);
                    $("#national").text("US Homicides per 100,000: " + natlHomicide);
                }

    
                var murders = parseFloat(response.data[recentYear].value / stateCapitals[thisIndex].population) * 100000;
                var murdersper = murders.toFixed(2);
                var stateHomicides = parseFloat(murdersper);
                console.log("state Homicides + 100");
                console.log(stateHomicides + 100);
               
                $("#crime-header").text("2018 Homicides");
                $("#homicides").text(stateCapitals[thisIndex].state + " Total Homicides: " + response.data[recentYear].value);
                $("#hPerCapita").text(stateCapitals[thisIndex].abbreviation + " Homicides per 100,000: " + stateHomicides);
                $("#national").text("US Homicides per 100,000: " + natlHomicide);


                if (stateHomicides < 2.5) {
                    $("#rating").html("Very Safe" + ' '+ '<i class="fas fa-shield-alt"></i>');
                    $("#rating").css({"text-align": "center", "color": "white", "background-color": "green", "width": "60%"});
                } else if (stateHomicides > 2.5 && stateHomicides < natlHomicide) {
                    $("#rating").html("Safe" + ' ' + '<i class="fas fa-check"></i>');
                    $("#rating").css({"text-align": "center", "color": "white", "background-color": "blue", "width": "60%"});
                } else if (stateHomicides > natlHomicide && stateHomicides < 5.5) {
                    $("#rating").html("Dangerous" + ' ' + '<i class="fas fa-exclamation-circle"></i>');
                    $("#rating").css({"text-align": "center", "color": "white", "background-color": "orange", "width": "60%"});
                } else {
                    $("#rating").html("Very Dangerous" + ' ' + '<i class="fas fa-exclamation-triangle"></i>');
                    $("#rating").css({"text-align": "center", "color": "white", "background-color": "red", "width": "60%"});
                }
            }).fail(function(error) {
                $("#homicides").text(stateCapitals[thisIndex].state + " Homicides: N/A");
                $("#hPerCapita").text(stateCapitals[thisIndex].abbreviation + " Homicides per 100,000: N/A");
                $("#national").text("National Homicides per 100,000: " + natlHomicide);
                $("#rating").text("Inconclusive");
                    $("#rating").css({"text-align": "center", "color": "white", "background-color": "black", "width": "60%"});
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
    



});

   
