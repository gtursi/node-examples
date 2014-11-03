var net = require('net');
var server = net.createServer(function(c) { //'connection' listener
  console.log('Client connected');
  c.on('end', function() {
    console.log('Client disconnected');
  });
  c.write('hello (server says)\r\n');
  c.pipe(c);
});

server.listen(15246, function() { //'listening' listener
  console.log('server bound');
});

server.on('error', function (e) {
  if (e.code == 'EADDRINUSE') {
    console.log('Address in use, retrying...');
    setTimeout(function () {
      server.close();
      server.listen('15246', 'localhost');
    }, 1000);
  }
});
