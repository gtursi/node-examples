var net = require('net');

var server = net.createServer(function (socket) {
  socket.write('Echo server\r\n');
  socket.pipe(socket);
});

server.listen(15246, function(){
	console.log('Echo tcp server running at port 15246');
});
