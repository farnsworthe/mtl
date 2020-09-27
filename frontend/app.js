

var bodyParser = require('body-parser')
var http = require('http');
var fs = require('fs');



var server = http.createServer(function (req, resp) {

    if (req.url === "/") {
        fs.readFile("files/index.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
             
            resp.end();
        });
    } else {
        resp.writeHead(200, { 'Content-Type': 'text/html' });
        resp.write('wrong page!');
        resp.end();
    }
});

server.listen(5050);
 
console.log('Server Started listening on 5050');