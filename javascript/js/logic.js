// Save config information.
url = "http://api.openweathermap.org/data/2.5/weather?"
units = "imperial"

// Build partial query URL
queryUrl = `${url}appid=${apiKey}&units=${units}&q=`

<<<<<<< HEAD
// Get latitude and temperature for cities
cities = ['Montgomery', 'Juneau', 'Phoenix', 'Little Rock',	'Sacramento', 'Denver', 'Hartford', 'Dover', 'Honolulu', 'Tallahassee', 'Atlanta',
=======
// Save config information.
url = "http://api.openweathermap.org/data/2.5/weather?"
units = "imperial"

// Build partial query URL
queryUrl = `${url}appid=${apiKey}&units=${units}&q=`

// Get latitude and temperature for cities
cities = ['Montgomery', 'Juneau', 'Phoenix', 'Little Rock', 'Sacramento', 'Denver', 'Hartford', 'Dover', 'Honolulu', 'Tallahassee', 'Atlanta',
>>>>>>> aa823775ca53c6b34db9b73119565dc28784841b
            'Boise', 'Springfield', 'Indianapolis', 'Des Moines', 'Topeka', 'Frankfort', 'Baton Rouge', 'Augusta', 'Annapolis', 'Boston', 
            'Lansing', 'St. Paul', 'Jackson', 'Jefferson City', 'Helena', 'Lincoln', 'Carson City', 'Concord', 'Trenton', 'Santa Fe', 'Raleigh', 
            'Bismarck', 'Albany', 'Columbus', 'Oklahoma City', 'Salem', 'Harrisburg', 'Providence', 'Columbia', 'Pierre', 'Nashville', 'Austin', 
            'Salt Lake City', 'Montpelier', 'Richmond', 'Olympia', 'Charleston', 'Madison', 'Cheyenne']

<<<<<<< HEAD
// set up lists to hold reponse info
=======
// set up lists to hold response info
>>>>>>> aa823775ca53c6b34db9b73119565dc28784841b
lat = []
lon = []
temp = []
descr = []
<<<<<<< HEAD

//  Loop through the list of cities and perform a request for data on each
for (i = 0; i < cities.length; i++) {
  d3.json(queryUrl + cities[i]).then(function (data) {
    // response = requests.get(query_url + city).json()
=======
weatherData = []

// Loop through the list of cities and perform a request for data on each
for (i = 0; i < cities.length; i++) {
  d3.json(queryUrl + cities[i]).then(function (data) {
>>>>>>> aa823775ca53c6b34db9b73119565dc28784841b
    lat.push(data['coord']['lat'])
    lon.push(data['coord']['lon'])
    temp.push(data['main']['temp'])
    descr.push(data['weather'][0]['description'])

<<<<<<< HEAD
// Create current weather dictionary
})};
weatherDict = {
  "city": cities,
  "lat": lat,
  'lon': lon,
  "temp": temp,
  'description': descr
};
console.log(weatherDict);
=======
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
>>>>>>> aa823775ca53c6b34db9b73119565dc28784841b



