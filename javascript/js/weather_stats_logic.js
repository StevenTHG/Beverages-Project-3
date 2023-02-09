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
lat = []
lon = []
temp = []
descr = []

//  Loop through the list of cities and perform a request for data on each
for (i = 0; i < cities.length; i++) {
  d3.json(queryUrl + cities[i]).then(function (data) {
    // response = requests.get(query_url + city).json()
    lat.push(data['coord']['lat'])
    lon.push(data['coord']['lon'])
    temp.push(data['main']['temp'])
    descr.push(data['weather'][0]['description'])
})};
weatherDict = {
  "city": cities,
  "lat": lat,
  'lon': lon,
  "temp": temp,
  'description': descr
};
console.log(weatherDict);



