// Create a map object.
var myMap = L.map("map-id", {
  center: [39.00, -95.71],
  zoom: 4
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// An array containing each state's name, location, and population
var statesCocktails =  [
  {name: "ALABAMA",lat:32.377716,lon:-86.300568,cocktail:"Bushwacker"},
  {name: "ALASKA",lat:58.301598,lon:-134.420212 ,cocktail:"Tequila Sunrise"},
  {name: "ARIZONA",lat:33.448143 ,lon:-112.096962 ,cocktail:"Manhattan"},
  {name: "ARKANSAS",lat:34.746613 ,lon:-92.288986 ,cocktail:"Margarita"},
  {name: "CALIFORNIA",lat:38.576668 ,lon:-121.493629 ,cocktail:"Mojito"},
  {name: "COLORADO",lat:39.739227 ,lon:-104.984856 ,cocktail:"Dark 'N' Stormy"},
  {name: "CONNECTICUT",lat:41.764046 ,lon:-72.682198 ,cocktail:"Vodka Martini"},
  {name: "DELAWARE",lat:39.157307 ,lon:-75.519722 ,cocktail:"Orange Crush"},
  {name: "FLORIDA",lat:30.438118 ,lon:-84.281296 ,cocktail:"Mojito"},
  {name: "GEORGIA",lat:33.749027 ,lon:-84.388229 ,cocktail:"Piña Colada"},
  {name: "HAWAII",lat:21.307442 ,lon:-157.857376 ,cocktail:"Blue Hawaii"},
  {name: "IDAHO",lat:43.617775,lon:-116.199722 ,cocktail:"Mojito"},
  {name: "ILLINOIS",lat:39.798363,lon:-89.654961 ,cocktail:"Margarita"},
  {name: "INDIANA",lat:39.768623 ,lon:-86.162643 ,cocktail:"Mojito"},
  {name: "IOWA",lat:41.591087 ,lon:-93.603729 ,cocktail:"Tom Collins"},
  {name: "KANSAS",lat:39.048191 ,lon:-95.677956 ,cocktail:"Amaretto Sour"},
  {name: "KENTUCKY",lat:38.186722 ,lon:-84.875374 ,cocktail:"Mint Julep"},
  {name: "LOUISIANA",lat:30.457069 ,lon:-91.187393 ,cocktail:"Tom Collins"},
  {name: "MAINE",lat:44.307167 ,lon:-69.781693 ,cocktail:"Vodka Martini"},
  {name: "MARYLAND",lat:38.978764 ,lon:-76.490936 ,cocktail:"Mai Tai"},
  {name: "MASSACHUSETTS",lat:42.358162 ,lon:-71.063698 ,cocktail:"Sea Breeze"},
  {name: "MICHIGAN",lat:42.733635 ,lon:-84.555328 ,cocktail:"7 and 7"},
  {name: "MINNESOTA",lat:44.955097 ,lon:-93.102211 ,cocktail:"Tom Collins"},
  {name: "MISSISSIPPI",lat:32.303848 ,lon:-90.182106 ,cocktail:"Tom Collins"},
  {name: "MISSOURI",lat:38.579201 ,lon:-92.172935 ,cocktail:"Mojito"},
  {name: "MONTANA",lat:46.585709 ,lon:-112.018417 ,cocktail:"Margarita"},
  {name: "NEBRASKA",lat:40.808075 ,lon:-96.699654 ,cocktail:"Mojito"},
  {name: "NEVADA",lat:39.163914 ,lon:-119.766121 ,cocktail:"Tom Collins"},
  {name: "NEW HAMPSHIRE",lat:43.206898 ,lon:-71.537994 ,cocktail:"Gin and Tonic"},
  {name: "NEW JERSEY",lat:40.220596 ,lon:-74.769913 ,cocktail:"Long Island Iced Tea"},
  {name: "NEW MEXICO",lat:35.68224 ,lon:-105.939728 ,cocktail:"Margarita"},
  {name: "NEW YORK",lat:42.652843 ,lon:-73.757874 ,cocktail:"Tom Collins"},
  {name: "NORTH CAROLINA",lat:35.78043 ,lon:-78.639099 ,cocktail:"Vodka Martini"},
  {name: "NORTH DAKOTA",lat:46.82085 ,lon:-100.783318 ,cocktail:"Sex on the Beach"},
  {name: "OHIO",lat:39.961346 ,lon:-82.999069 ,cocktail:"Daiquiri"},
  {name: "OKLAHOMA",lat:35.492207 ,lon:-97.503342 ,cocktail:"Long Island Iced Tea"},
  {name: "OREGON",lat:44.938461 ,lon:-123.030403 ,cocktail:"Mojito"},
  {name: "PENNSYLVANIA",lat:40.264378 ,lon:-76.883598 ,cocktail:"Pimm's and Lemonade"},
  {name: "RHODE ISLAND",lat:41.830914 ,lon:-71.414963 ,cocktail:"Vodka Martini"},
  {name: "SOUTH CAROLINA",lat:34.000343 ,lon:-81.033211 ,cocktail:"Piña Colada"},
  {name: "SOUTH DAKOTA",lat:44.367031 ,lon:-100.346405 ,cocktail:"Sex on the Beach"},
  {name: "TENNESSEE",lat:36.16581 ,lon:-86.784241 ,cocktail:"Bushwacker"},
  {name: "TEXAS",lat:30.27467 ,lon:-97.740349 ,cocktail:"Mojito"},
  {name: "UTAH",lat:40.777477 ,lon:-111.888237 ,cocktail:"Margarita"},
  {name: "VERMONT",lat:44.262436 ,lon:-72.580536 ,cocktail:"Margarita"},
  {name: "VIRGINIA",lat:37.538857 ,lon:-77.43364 ,cocktail:"Dark 'N' Stormy"},
  {name: "WASHINGTON",lat:47.035805,lon:-122.905014 ,cocktail:"Sea Breeze"},
  {name: "WEST VIRGINIA",lat:38.336246 ,lon:-81.612328 ,cocktail:"Sex on the Beach"},
  {name: "WISCONSIN",lat:43.074684 ,lon:-89.384445 ,cocktail:"Long Island Iced Tea"},
  {name: "WYOMING",lat:41.140259 ,lon:-104.820236 ,cocktail:"Whiskey Sour"}
];

// Looping through the namesCocktails array, create one marker for each state, bind a popup containing its name and cocktail, and add it to the map.
for (var i = 0; i < statesCocktails.length; i++) {
  var state = statesCocktails[i];
  const location = [];
  location.push(state.lat);
  location.push(state.lon);
  L.marker(location)
    .bindPopup(`<h1>${state.name}</h1> <hr> <h3>Most Popular Cocktail: ${state.cocktail}</h3>`)
    .addTo(myMap);
}



