var stateCapitals = [
    {
      capital: "Montgomery",
      state: "Alabama",
      abbreviation: "AL",
      lat: 32.361538,
      long: -86.279118,
      population: 737438,
      centerLat: 32.505,
      centerLong: -86.380,
      zoom: 5
    },
    {
      capital: "Juneau",
      state: "Alaska",
      abbreviation: "AK",
      lat: 58.301935,
      long: -134.419740,
      population: 4887871,
      centerLat: 64.4354,
      centerLong: -152.2812,
      zoom: 3
    },
    {
      capital: "Phoenix",
      state: "Arizona",
      abbreviation: "AZ",
      lat: 33.448457,
      long: -112.073844,
      population: 3013825,
      centerLat: 34.185,
      centerLong: -111.476,
      zoom: 5
    },
    {
      capital: "Little Rock",
      state: "Arkansas",
      abbreviation: "AR",
      lat: 34.736009,
      long: -92.331122,
      population: 7171646,
      centerLat: 34.489,
      centerLong: -92.181,
      zoom: 5
    },
    {
      capital: "Sacramento",
      state: "California",
      abbreviation: "CA",
      lat: 38.555605,
      long: -121.468926,
      population: 39557045,
      centerLat: 37.958,
      centerLong: -119.2658,
      zoom: 4
    },
    {
      capital: "Denver",
      state: "Colorado",
      abbreviation: "CO",
      lat: 39.7391667,
      long: -104.984167,
      population: 569564,
      centerLat: 39.0000,
      centerLong: -105.325,
      zoom: 5
    },
    {
      capital: "Hartford",
      state: "Connecticut",
      abbreviation: "CT",
      lat: 41.767,
      long: -72.677,
      population: 3572665,
      centerLat: 41.357,
      centerLong: -72.424,
      zoom: 7
    },
    {
      capital: "Dover",
      state: "Delaware",
      abbreviation: "DE",
      lat: 39.161921,
      long: -75.526755,
      population: 967171,
      centerLat: 38.5848,
      centerLong: -75.3042,
      zoom: 7
    },
    {
      capital: "Washington, D.C.",
      state: "District of Columbia",
      abbreviation: "D.C.",
      lat: 39.161921,
      long: -75.526755,
      population: 702455,
      centerLat: 38.8977,
      centerLong: -77.0365,
      zoom: 9
    },
    // FL doesn't return FBI data
    {
      capital: "Tallahassee",
      state: "Florida",
      abbreviation: "FL",
      lat: 30.4518,
      long: -84.27277,
      population:  21299325,
      centerLat: 28.4053,
      centerLong: -82.2736,
      zoom: 5
    },
    // FL doesn't return FBI data
    {
      capital: "Atlanta",
      state: "Georgia",
      abbreviation: "GA",
      lat: 33.76,
      long: -84.39,     
      population: 10519475,
      centerLat: 32.39436,
      centerLong: -83.26179,
      zoom: 5
    },
    {
      capital: "Honolulu",
      state: "Hawaii",
      abbreviation: "HI",
      lat: 21.30895,
      long: -157.826182,
      population: 1420491,
      centerLat: 20.571,
      centerLong: -157.156,
      zoom: 6
    },
    {
      capital: "Boise",
      state: "Idaho",
      abbreviation: "ID",
      lat: 43.613739,
      long: -116.237651,
      population: 1754208,
      centerLat: 44.154,
      centerLong: -114.574,
      zoom: 5
    },
    {
      capital: "Springfield",
      state: "Illinois",
      abbreviation: "IL",
      lat: 39.783250,
      long: -89.650373,
      population: 12741080,
      centerLat: 39.44215,
      centerLong: -89.30131,
      zoom: 5
    },
    {
      capital: "Indianapolis",
      state: "Indiana",
      abbreviation: "IN",
      lat: 39.790942,
      long: -86.147685,
      population: 6691878,
      centerLat: 39.45577,
      centerLong: -86.26286,
      zoom: 5
    },
    {
      capital: "Des Moines",
      state: "Iowa",
      abbreviation: "IA",
      lat: 41.590939,
      long: -93.620866,
      population: 3156145,
      centerLat: 41.577,
      centerLong: -93.231,
      zoom: 5

    },
    {
      capital: "Topeka",
      state: "Kansas",
      abbreviation: "KS",
      lat: 39.04,
      long: -95.69,
      population: 2911505,
      centerLat: 38.299,
      centerLong: -98.419,
      zoom: 5
    },
    {
      capital: "Frankfort",
      state: "Kentucky",
      abbreviation: "KY",
      lat: 38.197274,
      long: -84.86311,
      population: 4468402,
      centerLat: 37.215,
      centerLong: -84.304,
      zoom: 5
    },
    {
      capital: "Baton Rouge",
      state: "Louisiana",
      abbreviation: "LA",
      lat: 30.45809,
      long: -91.140229,
      population: 4659978,
      centerLat: 30.581,
      centerLong: -92.322,
      zoom: 5
    },
    {
      capital: "Augusta",
      state: "Maine",
      abbreviation: "ME",
      lat: 44.323535,
      long: -69.765261,
      population: 1338404,
      centerLat: 45.15119982,
      centerLong: -69.13599988,
      zoom: 5
    },
    {
      capital: "Annapolis",
      state: "Maryland",
      abbreviation: "MD",
      lat: 38.972945,
      long: -76.501157,
      population: 6042718,
      centerLat: 39.295,
      centerLong: -77.223,
      zoom: 7
    },
    {
      capital: "Boston",
      state: "Massachusetts",
      abbreviation: "MA",
      lat: 42.2352,
      long: -71.0275,
      population: 6902149,
      centerLat: 42.223762,
      centerLong: -71.553093,
      zoom: 7
    },
    {
      capital: "Lansing",
      state: "Michigan",
      abbreviation: "MI",
      lat: 42.7335,
      long: -84.5467,
      population: 9995915,
      centerLat: 45.37,
      centerLong: -84.563,
      zoom: 5
    },
    {
      capital: "Saint Paul",
      state: "Minnesota",
      abbreviation: "MN",
      lat: 44.95,
      long: -93.094,
      population: 5611179,
      centerLat: 46.15,
      centerLong: -95.196,
      zoom: 5
    },
    {
      capital: "Jackson",
      state: "Mississippi",
      abbreviation: "MS",
      lat: 32.320,
      long: -90.207,
      population: 2986530,
      centerLat: 32.489,
      centerLong: -89.430,
      zoom: 5
    },
    {
      capital: "Jefferson City",
      state: "Missouri",
      abbreviation: "MO",
      lat: 38.572954,
      long: -92.189283,
      population: 6126452,
      centerLat: 38.4992,
      centerLong: -92.3566,
      zoom: 5
    },
    {
      capital: "Helana",
      state: "Montana",
      abbreviation: "MT",
      lat: 46.595805,
      long: -112.027031,
      population: 1062305,
      centerLat: 47.0027,
      centerLong: -109.8741,
      zoom: 5
    },
    {
      capital: "Lincoln",
      state: "Nebraska",
      abbreviation: "NE",
      lat: 40.809868,
      long: -96.675345,
      population: 1929268,
      centerLat: 41.3130,
      centerLong: -99.5142,
      zoom: 5
    },
    // Nevada doesn't return FBI data
    {
      capital: "Carson City",
      state: "Nevada",
      abbreviation: "NV",
      lat: 39.160949,
      long: -119.753877,
      population: 3034392,
      centerLat: 39.303,
      centerLong: -116.559,
      zoom: 5
    },
    // Nevada doesn't return FBI data
    {
      capital: "Concord",
      state: "New Hampshire",
      abbreviation: "NH",
      lat: 43.220093,
      long: -71.549127,
      population: 1356458,
      centerLat: 43.5657995,
      centerLong: -71.4824994,
      zoom: 6
    },
    // New Jersey doesn't return FBI data
    {
      capital: "Trenton",
      state: "New Jersey",
      abbreviation: "NJ",
      lat: 40.221741,
      long: -74.756138,
      population: 8908520,
      centerLat: 40.412,
      centerLong: -74.3330,
      zoom: 6
    },
    // New Jersey doesn't return FBI data
    {
      capital: "Santa Fe",
      state: "New Mexico",
      abbreviation: "NM",
      lat: 35.667231,
      long: -105.964575,
      population: 2095428,
      centerLat: 34.301,
      centerLong: -106.67,
      zoom: 5
    },
    // New York doesn't return FBI data
    {
      capital: "Albany",
      state: "New York",
      abbreviation: "NY",
      lat: 42.659829,
      long: -73.781339,
      population: 19542209,
      centerLat: 42.579,
      centerLong: -76.10,
      zoom: 5
    },
    // New York doesn't return FBI data
    // North Carolina doesn't return FBI data
    {
      capital: "Raleigh",
      state: "North Carolina",
      abbreviation: "NC",
      lat: 35.771,
      long: -78.638,
      population: 10383620,
      centerLat: 35.362,
      centerLong: -79.273,
      zoom: 6
    },
    // North Carolina doesn't return FBI data
    {
      capital: "Bismarck",
      state: "North Dakota",
      abbreviation: "ND",
      lat: 48.813343,
      long: -100.779004,
      population: 760077,
      centerLat: 47.247,
      centerLong: -100.341,
      zoom: 5
    },
    {
      capital: "Columbus",
      state: "Ohio",
      abbreviation: "OH",
      lat: 39.962245,
      long: -83.000647,
      population: 11689442,
      centerLat: 40.217,
      centerLong: -82.445,
      zoom: 5
    },
    {
      capital: "Oklahoma City",
      state: "Oklahoma",
      abbreviation: "OK",
      lat: 35.482309,
      long: -97.534994,
      population: 3943079,
      centerLat: 35.322,
      centerLong: -97.396,
      zoom: 5
    },
    {
      capital: "Salem",
      state: "Oregon",
      abbreviation: "OR",
      lat: 44.931109,
      long: -123.029159,
      population: 4190713,
      centerLat: 43.521,
      centerLong: -120.587,
      zoom: 5
    },
    {
      capital: "Harrisburg",
      state: "Pennsylvania",
      abbreviation: "PA",
      lat: 40.269789,
      long: -76.875613,
      population: 12807060,
      centerLat: 40.538,
      centerLong: -77.448,
      zoom: 6
    },
    {
      capital: "Providence",
      state: "Rhode Island",
      abbreviation: "RI",
      lat: 41.82355,
      long: -71.422132,
      population: 1057315,
      centerLat: 41.7001,
      centerLong: -71.4162,
      zoom: 8
    },
    {
      capital: "Columbia",
      state: "South Carolina",
      abbreviation: "SC",
      lat: 34.000,
      long: -81.035,
      population: 5084127,
      centerLat: 33.498,
      centerLong: -80.524,
      zoom: 6
    },
    {
      capital: "Pierre",
      state: "South Dakota",
      abbreviation: "SD",
      lat: 44.367966,
      long: -100.336378,
      population: 882235,
      centerLat: 44.241,
      centerLong: -100.287,
      zoom: 5
    },
    {
      capital: "Nashville",
      state: "Tennessee",
      abbreviation: "TN",
      lat: 36.165,
      long: -86.784,
      population: 6770010,
      centerLat: 35.477,
      centerLong: -86.373,
      zoom: 6
    },
    {
      capital: "Austin",
      state: "Texas",
      abbreviation: "TX",
      lat: 30.266667,
      long: -97.75,
      population: 28701845,
      centerLat: 31.232952,
      centerLong: -99.101434,
      zoom: 5
    },
    {
      capital: "Salt Lake City",
      state: "Utah",
      abbreviation: "UT",
      lat: 40.7547,
      long: -111.892622,
      population: 3161105,
      centerLat: 39.232,
      centerLong: -111.411,
      zoom: 5
    },
    {
      capital: "Montpelier",
      state: "Vermont",
      abbreviation: "VT",
      lat: 44.26639,
      long: -72.57194,
      population: 626299,
      centerLat: 43.556,
      centerLong: -72.403,
      zoom: 6
    },
    {
      capital: "Richmond",
      state: "Virginia",
      abbreviation: "VA",
      lat: 37.54,
      long: -77.46,
      population: 8517685,
      centerLat: 37.293,
      centerLong: -78.338,
      zoom: 5
    },
    {
      capital: "Olympia",
      state: "Washington",
      abbreviation: "WA",
      lat: 47.042418,
      long: -122.893077,
      population: 7535591,
      centerLat: 47.2,
      centerLong: -120.161,
      zoom: 5
    },
    {
      capital: "Charleston",
      state: "West Virginia",
      abbreviation: "WV",
      lat: 38.349497,
      long: -81.633294,
      population: 1805832,
      centerLat: 38.359,
      centerLong: -80.422,
      zoom: 5
    },
    {
      capital: "Madison",
      state: "Wisconsin",
      abbreviation: "WI",
      lat: 43.074722,
      long: -89.384444,
      population: 5813568,
      centerLat: 44.2616,
      centerLong: -90.074867,
      zoom: 5
    },
    // Wyoming doesn't return FBI data
    {
      capital: "Cheyenne",
      state: "Wyoming",
      abbreviation: "WY",
      lat: 41.145548,
      long: -104.802042,
      population: 577737,
      centerLat: 42.5818,
      centerLong: -107.4018,
      zoom: 5
    }
    // Wyoming doesn't return FBI data
]
