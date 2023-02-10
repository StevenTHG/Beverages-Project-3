// Create a map object.
var myMap = L.map("map-id", {
  center: [39.00, -95.71],
  zoom: 4
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Save config information.
url = "http://api.openweathermap.org/data/2.5/weather?"
units = "imperial"

// Build partial query URL
queryUrl = `${url}appid=${apiKey}&units=${units}&q=`

// Get latitude and temperature for cities
cities = ['Montgomery', 'Juneau', 'Phoenix', 'Little Rock',	'Sacramento', 'Denver', 'Hartford', 'Dover', 'Honolulu', 'Tallahassee', 'Atlanta',
            'Boise', 'Springfield', 'Indianapolis', 'Des Moines', 'Topeka', 'Frankfort', 'Baton Rouge', 'Augusta', 'Annapolis', 'Boston', 
            'Lansing', 'St. Paul', 'Jackson', 'Jefferson City', 'Helena', 'Lincoln', 'Carson City', 'Concord', 'Trenton', 'Santa Fe', 'Raleigh', 
            'Bismarck', 'Albany', 'Columbus', 'Oklahoma City', 'Salem', 'Harrisburg', 'Providence', 'Columbia', 'Pierre', 'Nashville', 'Austin', 
            'Salt Lake City', 'Montpelier', 'Richmond', 'Olympia', 'Charleston', 'Madison', 'Cheyenne']

// set up lists to hold reponse info
// lat = []
// lon = []
// temp = []
// descr = []
weatherDict = {}
// console.log(cities.length);
//  Loop through the list of cities and perform a request for data on each
for (i = 0; i < cities.length; i++) {
  let location = [];
  d3.json(queryUrl + cities[i]).then(function (data) {
    // response = requests.get(query_url + city).json()
    // lat.push(data['coord']['lat'])
    // lon.push(data['coord']['lon'])
    // temp.push(data['main']['temp'])
    // descr.push(data['weather'][0]['description'])
    weatherDict[i] = {
      city: data['name'],
      lat: data['coord']['lat'],
      lon: data['coord']['lon'],
      temp: data['main']['temp'],
      descr: data['weather'][0]['description']
    };

    // console.log(weatherDict[i]);
})};
// console.log(weatherDict.length);
// let weatherDict = {
//   "city": cities,
//   "lat": lat,
//   'lon': lon,
//   "temp": temp,
//   'description': descr
// };

console.log(weatherDict[0]);

// Looping through the weatherDict array, create one marker for each state, bind a popup containing up-to-date weather info, and add it to the map.
// for (let x = 0; x < 50; x++) {
//   let cityWeather = weatherDict[x];
//   let location = [];
//   location.push(cityWeather[x].lat);
//   location.push(cityWeather[x].lon);
  // console.log(location);
  // L.marker(location)
    // .bindPopup(`<h1>${i.city}</h1> <hr> <h3>Current Temperature: ${i.temp}</h3> <hr> <h3>Current Weather: ${i.description}</h3>`).addTo(myMap);
// };

// console.log(weatherDict);

