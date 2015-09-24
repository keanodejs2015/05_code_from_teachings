var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello kkk');
} );

app.get('/tina',  function (req, res) {
	res.send('<h1>Tina is here</h1>');
});

app.post('/', function(req, res) {
	// save something in a database
});

app.put('/user/:id', function(req, res){
	// update user in tthe database
});

app.delete('/user/:id', function(req, res){

	// delete a user
});
app.listen(3000);