/*
Create a Node application which makes use of the "geocoder" NPM package to obtain detailed geocoding information about a location.
Then console.log the geocoding information to display in your terminal.

You can choose to make one of two assumptions when completing this application.


Easier: The user will always provide a location in the following format: "City, State" (example: "Atlanta, GA", "Houston, TX").
Harder: The user can provide a location in any format. In fact, they can even provide a landmark instead of an address. ("151 Sip Ave, Jersey City NJ", "The Eiffel Tower", etc.)
*/


// Instructions: 
// Build a Node application that takes in a location input via the command line, then geocodes it using the geocoder NPM package.
// Then console.log the geocoding information for display.

// Easier: User will provide the city and state in the following format: "Atlanta, GA", "Houston, TX"
// Slightly More Challenging: User will provide the address in any format: "151 Sip Ave Jersey City, NJ", "Austin, TX", etc.

// All: Be sure to console log the output using JSON.stringify in "pretty-print" format. 

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
var geocoder = require("geocoder");
var city = process.argv[2];
var state = process.argv[3];


// Take in the command line arguments
geocoder.geocode(city+""+state, function ( err, data ) {

  // If there is an error log it.
  if (err) {
    console.log(err);
  }

  // If there is no error... then print out the weather data.
  // We use JSON.stringify to print the data in string format.
  // We use the JSON.stringify argument of "2" to make the format pretty.
  // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
  console.log(JSON.stringify(data, null, 2));
  console.log(JSON.stringify(data.results[0].geometry.location));


});




