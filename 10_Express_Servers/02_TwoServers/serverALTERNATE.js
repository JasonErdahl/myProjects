// Require/import the HTTP module
var http = require("http");

var server = http.createServer(function(request, result){
    console.log("server received a request");
    result.end("hello World");
})

server.listen(7000,function() {
    console.log("listening on port 7000");
})
//localhost:7000