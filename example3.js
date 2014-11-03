var net = require('net');
var server = net.createServer(function(client) { //'connection' listener
  console.log('server connected');
  client.on('end', function() {
    console.log('server disconnected');
  });
  client.write('hello\r\n');
  client.pipe(client);
});
server.listen(15246, function() { //'listening' listener
  console.log('server bound');
});
