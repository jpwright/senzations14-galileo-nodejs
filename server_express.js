var express = require("express");
var app = express();
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
	response.render('index', {
		title: 'Home',
		message: 'This is an Express app running on the Galileo'
	});
});

app.listen(80);
console.log("Server listening!");