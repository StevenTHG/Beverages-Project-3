// set up url for API call
url = "http://api.openweathermap.org/data/2.5/weather?"
units = "imperial"

// Build partial query URL
queryUrl = `${url}appid=${api_key}&units=${units}&q=`

// Perform a GET request to the query URL/
d3.json(queryUrl).then(function (data) {
  // Once we get a response, send the data.features object to the createFeatures function.
  console.log(data);
});
