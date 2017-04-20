/* app v 1 */
var http = require('http');

var handler = function(req, res){
    console.log("Request: " + req.url);
    res.writeHeader(200);
    res.end("[v1] App running");
};

var www = http.createServer(handler);
www.listen(80);