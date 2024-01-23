const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  if (req.url==='/favicon.ico') {
    fs.readFile('./favicon.ico', function(err, data) {
      if(err) {
        res.writeHead(404);
        res.write('Error : favicon.ico not found');
      } else {
        res.writeHead(200, {
          'Content-Type': 'image/x-icon',
        });
        res.write(data);
      }
      res.end();
    })
  } else {
    res.write('Halo Bro!');
    res.end();
  }
}).listen(3000, ()=> console.log('Server is running on port 3000'));
