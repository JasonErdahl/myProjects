// Require/import the HTTP module
var http = require("http");
var action = process.argv[2];

switch (action) {
case "good":
  good();
  break;

case "bad":
  bad();
  break;
}

function good(){
    // Require/import the HTTP module
    var http = require("http");

    var server = http.createServer(function(request, result){
        console.log("server received a request YOU RULE");
        result.end("You are the best programmer EVER");
    })

    server.listen(7500,function() {
        console.log("listening on port 7500 YOU RULE");
    })
    // node good_badServer good
    // http://localhost:7500
}

function bad() {
    // Require/import the HTTP module
    var http = require("http");

    var server = http.createServer(function(request, result){
        console.log("server received a request DUMMY");
        result.end("You are the worst programmer ever");
    })

    server.listen(7000,function() {
        console.log("listening on port 7000 DUMMY");
    })
    // node good_badServer bad
    // http://localhost:7000
}
