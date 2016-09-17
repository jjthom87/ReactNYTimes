// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');

// Geocoder API
var apiKey = "837bbf568dc44cdf94a21da19f726441";

// Helper Functions (in this case the only one is runQuery)
var NYTApi = {

	// This function serves our purpose of running the query to geolocate. 
	runQuery: function(article){

		console.log(article);

		//Figure out the geolocation
		var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?' 
		+ 'api-key=' + apiKey;

		return axios.get(queryURL)
			.then(function(response){

				console.log(response);
				return response.data.results[0].formatted;
		})

	},

	// This function hits our own server to retrieve the record of query results
	getHistory: function(){

		return axios.get('/api/articles')
			.then(function(response){

				console.log(response);
				return response;
			});
	},

	// This function posts new searches to our database.
	postHistory: function(location){

		return axios.post('/api/articles', {title: title})
			.then(function(results){

				console.log("Posted to MongoDB");
				return(results);
			})
	}

}

module.exports = NYTApi;