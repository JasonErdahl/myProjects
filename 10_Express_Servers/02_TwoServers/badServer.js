// Require/import the HTTP module
var http = require("http");

var server = http.createServer(function(request, result){
    console.log("server received a request DUMMY");
    result.end("You are the worst programmer ever");
})

server.listen(7000,function() {
    console.log("listening on port 7000 DUMMY");
})
// node badServer
// http://localhost:7000