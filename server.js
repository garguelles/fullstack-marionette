var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use('/js', express.static('public/build/js'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function (request, response) {
	//response.json('sample');
	response.render('index');
});

app.get('/admin', function(request, response) {
	//response.status(200).json('hello world sample');
	response.status(200).sendFile('index.html');
});

app.listen(port);
