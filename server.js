var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use('/js', express.static('public/build/js'));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.get('/', function (request, response) {
	response.render('index');
});

app.get('/admin', function(request, response) {
	response.render('admin/index');
});

app.listen(port);
