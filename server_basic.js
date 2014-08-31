var http = require("http"); //npm module
var server = http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("Galileo Server!");
	response.end();
});

server.listen(80);
console.log("Server listening!");