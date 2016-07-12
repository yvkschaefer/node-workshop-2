// How's the weather?

// Go to Forecast.io API and get yourself a free API key
// Remember the Google Geocoding API 
// https://maps.googleapis.com/maps/api/geocode/json?address=montreal from yesterday's workshop
// Using both APIs, complete the following workflow:
// Ask the user for their location
// Retrieve the weather for the user's location
// Display the current weather as well as the next 5 days weather in a nice way
// Hint: to display the results in a nice way, a few NPM modules could be useful, including but not limited to:
// colors
// cli-table
// node-emoji
// Add/commit/push

var jsonRequest = require('./library/request-json');
var prompt = require('prompt');
var forecastApiNeedsLatLong = 'https://api.forecast.io/forecast/829dc1c637eb94a8af0154560176cbf2/'
var locationUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address='
var clc = require('colors');
// var cliTable = require('cli-table');//this, to explore later. looks fascinating.
var emoji = require('node-emoji');

prompt.get('userLocation', function(err, answer) {
    if (err){
        console.log('sorry, there was an error');
            }
    else {
        var placeUrl = locationUrl + answer.userLocation;
        jsonRequest(placeUrl, function (err, data) {
            if (err){
                console.log('there was an error');
            }
            else {
                var parseBody = data;
                var userLatitude = parseBody.results[0].geometry.location.lat;
                var userLongitude = parseBody.results[0].geometry.location.lng;
                // console.log('user latitude ' + userLatitude); //to check my user latitude
                // console.log('user longitude ' + userLongitude); //to check my user longitude
                var forecastApi = forecastApiNeedsLatLong + userLatitude + ',' + userLongitude;
                //console.log(forecastApi); //to check my forecastAPI
               jsonRequest(forecastApi, function(err, datum) {
                   if (err){
                       console.log('there was an error');
                   }
                   else {
                       var parsedBody = datum;
                       var userForecast = parsedBody.daily.data[0].summary;
                       console.log(clc.white(emoji.emojify('Ok, it sounds like you are in :smile:' + answer.userLocation + ':heart:')));
                       console.log(clc.yellow(emoji.emojify(':sunny::snowflake:The weather at your location for today is ' + userForecast + ':panda_face::cyclone:')));
                       var eachDayData = parsedBody.daily.data.slice(1,5).map(function(data){
                           return data.summary;
                       });
                       console.log(clc.green(emoji.emojify('The weather:snowman: for the next few days is :sheep:')));
                       console.log(clc.white(emoji.emojify(':zap:' + eachDayData + ':hatched_chick:')));
                   }
               })
            }
        });
    }
})

// Hint: to display the results in a nice way, a few NPM modules could be useful, including but not limited to:
// colors
// cli-table
// node-emoji
// Add/commit/push