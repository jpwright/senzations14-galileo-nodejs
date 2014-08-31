var express = require("express");
var app = express();
app.set('view engine', 'ejs');
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var Galileo = require('galileo-io');
var board = new Galileo();

app.use(express.static(__dirname + '/js'));
console.log(__dirname + '/js');

app.get('/', function(request, response) {
	response.render('data', {
		title: 'Data',
		message: 'The value below should update when changed.'
	});
});

io.on('connection', function(socket) {
	console.log('user connected');
	board.analogRead("A0", function(data) {
		io.emit('data', data);
	});
});

server.listen(80);
console.log("Server listening!");