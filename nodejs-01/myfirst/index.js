var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1 style='color: red;'>Hello World!</h1>");
    res.write("<h2 style='color: green;'>From</h2>");
    res.write("<h1 style='color: blue;'>Jetarin Taloet 5711407085</h1>");
    res.end();
}).listen(8080);
