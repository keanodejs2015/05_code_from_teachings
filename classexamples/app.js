var http = require('http');
var fs = require('fs');
var mod = require('clbo_http_errors'); // ./module.js

var server = http.createServer(function(req, res) {

    var url = req.url;

    if (url === '/') {

        fs.readFile('./index.html', function(err, data) {

            if (err) {
                mod.err500(err, res);
            } else {
                res.writeHead(200, {
                    "Content-type": "text/html"
                });
                res.write(data);
                res.end();
            }
        });
    } else {
        mod.err404(res);
    }
});

server.listen(8080);
