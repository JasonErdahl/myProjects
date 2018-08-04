

// Dependencies
var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here

// localhost:8080/add/50/50
// localhost:8080/+/50/50
// localhost:8080/subtract/50/50
// localhost:8080/-/50/50
// localhost:8080/multiply/50/50
// localhost:8080/*/50/50
// localhost:8080/divide/50/50
// localhost:8080/2%f/50/50

app.get("/:id/:val1/:val2", function(req, res) {
    var operation = req.params.id;
    var val1 = req.params.val1;
    var val2 = req.params.val2;

  // TODO parse out the variables from the request
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers

  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
  // BONUS - How could you use * + etc. inside the app.get()?
  case "add":
  case "+":
    // Add your logic here. Pun intended.
    result = (parseInt(val1) + parseInt(val2));
    break;
  case "subtract":
  case "-":
    // Subtract logic
    result = (parseInt(val1) - parseInt(val2));
    break;
  case "multiply":
  case "*":
    // Multiply
    result = (parseInt(val1) * parseInt(val2));
    break;
  case "divide":
  case "/":
    // Divide
    result = (parseInt(val1) / parseInt(val2));
    break;
  default:
    // Handle anything that isn't specified
    result = "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
