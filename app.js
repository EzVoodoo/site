/**
 * lib/app.js
 */

const PORT = 80;
const ADDRESS = '106.187.100.49';

var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('小毛毛你好呀 :)\n');
});

server.listen(PORT, ADDRESS, function () {
    console.log('Server running at http://%s:%d/', ADDRESS, PORT);
    console.log('Press CTRL+C to exit');
});