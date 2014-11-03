var net = require('net');

var server = net.createServer(function (socket) {
  socket.write('Echo server\r\n');
  socket.pipe(socket);
});

server.listen(12546, '127.0.0.1');
console.log('Echo tcp server running at port 12546');
