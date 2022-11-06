const http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Hello, Node.js!</h1>");
    response.write("<h2>Zach Jewett - r64s554<h2> \
            <p>Running node server on port 3001")
    response.end();
}).listen(3001);