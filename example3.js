var net = require('net');

var server = net.createServer(function(client) { 
  //'connection' listener
  console.log('Client connected');
  client.on('end', function() {
    console.log('Client disconnected');
  });
  client.write('hello\r\n');
  client.pipe(client);
});
server.listen(15246, function() { //'listening' listener
  console.log('Server listening on port 15246...');
});
