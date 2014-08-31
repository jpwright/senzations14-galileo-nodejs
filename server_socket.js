var express = require("express");
var app = express();
app.set('view engine', 'ejs');
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

app.get('/', function(request, response) {
	response.render('action', {
		title: 'Action',
		message: 'This template will have a button underneath.'
	});
});

io.on('connection', function(socket) {
	console.log('user connected');
	socket.on('myAction', function(msg) {
		console.log('woohoo!');
	});
});

server.listen(80);
console.log("Server listening!");