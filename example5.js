var net = require('net');
var server = net.createServer(function (socket) {
  socket.end("goodbye\n");
});

// grab a random port.
server.listen(function() {
  address = server.address();
  console.log("opened server on %j", address);
  console.log(net.isIP("0.0.0.0"));
  console.log(net.isIPv4("0.0.0.0"));
  console.log(net.isIPv4("0.0.0.0"));
  server.close(function(){
	console.log("server closed!");
  });
});