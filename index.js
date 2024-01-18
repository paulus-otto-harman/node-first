const http = require('http');

http.createServer(function (req, res) {
  res.write('Halo Bro!');
  res.end();
}).listen(8080);
