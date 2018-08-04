// Dependencies
var http = require("http");
var fs = require("fs");

// Set our port to 8080
var PORT = 8080;

// Create our server
var server = http.createServer(handleRequest);

// Create a function for handling the requests and responses coming into our server
function handleRequest(req, res) {
  console.log('req.url: '+req.url);

  switch (req.url) {
  case "/index":
    console.log('index');
    url = '/index.html'
    break;

  case "/frameworks":
    console.log('frameworks');
    url = '/frameworks.html'
    break;

  case "/food":
    console.log('food');
    url = '/food.html'
    break;

  case "/movies":
    console.log('movies');
    url = '/movies.html'
    break;

  default:
    console.log('default');
    url = '/index.html'
    break;
  }

console.log('url: '+ url);

  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + url, function(err, data) {
    // IMPORTANT: __dirname is the directory name of the folder node is running on.

    // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
    // an html file.
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// Starts our server
server.listen(PORT, function() {
  console.log("Server is listening on PORT: " + PORT);
});
