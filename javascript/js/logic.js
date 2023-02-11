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
country = 'US'

// Build partial query URL
queryUrl = `${url}appid=${apiKey}&units=${units}&q=`

// Get latitude and temperature for cities
cities = ['Montgomery', 'Juneau', 'Phoenix', 'Little Rock', 'Sacramento', 'Denver', 'Hartford', 'Dover', 'Honolulu', 'Tallahassee', 'Atlanta',
            'Boise', 'Springfield', 'Indianapolis', 'Des Moines', 'Topeka', 'Frankfort', 'Baton Rouge', 'Augusta', 'Annapolis', 'Boston', 
            'Lansing', 'St. Paul', 'Jackson', 'Jefferson City', 'Helena', 'Lincoln', 'Carson City', 'Concord', 'Trenton', 'Santa Fe', 'Raleigh', 
            'Bismarck', 'Albany', 'Columbus', 'Oklahoma City', 'Salem', 'Harrisburg', 'Providence', 'Columbia', 'Pierre', 'Nashville', 'Austin', 
            'Salt Lake City', 'Montpelier', 'Richmond', 'Olympia', 'Charleston', 'Madison', 'Cheyenne']

// set up lists to hold response info
lat = []
lon = []
temp = []
descr = []
weatherData = []

// Loop through the list of cities and perform a request for data on each
for (i = 0; i < cities.length; i++) {
  d3.json(queryUrl + cities[i] + ',' + country).then(function (data) {
    lat.push(data['coord']['lat'])
    lon.push(data['coord']['lon'])
    temp.push(data['main']['temp'])
    descr.push(data['weather'][0]['description'])

    weatherData.push({
      city: data['name'],
      lat: data['coord']['lat'],
      lon: data['coord']['lon'],
      temp: data['main']['temp'],
      descr: data['weather'][0]['description']
    });

    // console.log the weatherData after all requests have been processed
    if (weatherData.length == cities.length) {
      for (let x = 0; x < weatherData.length; x++) {
        let cityWeather = weatherData[x];
        let location = [];
        location.push(cityWeather.lat);
        location.push(cityWeather.lon);
        console.log(cityWeather);
        L.marker(location)
          .bindPopup(`<h1>${cityWeather.city}</h1> <hr> <h3>Current Temperature: ${cityWeather.temp}</h3> <hr> <h3>Current Weather: ${cityWeather.descr}</h3>`).addTo(myMap);
      };
    };
  });
}