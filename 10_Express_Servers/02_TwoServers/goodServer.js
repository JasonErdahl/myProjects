// Require/import the HTTP module
var http = require("http");

var server = http.createServer(function(request, result){
    console.log("server received a request YOU RULE");
    result.end("You are the best programmer EVER");
})

server.listen(7500,function() {
    console.log("listening on port 7500 YOU RULE");
})
// node goodServer
// http://localhost:7500