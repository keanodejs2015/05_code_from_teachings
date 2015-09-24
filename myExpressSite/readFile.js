var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function (req, res) {
	
	fs.readFile('./public/index.html', 'utf-8',  function (err, data) {

		if (err) {
			res.status(500).send('Internal Server Error ' + err);
		};
		res.send(data);

	});
});

app.listen(3000);