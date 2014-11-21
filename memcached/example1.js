var Memcached = require('memcached');

var memcached = new Memcached('127.0.0.1:11211', {retries:10,retry:10000,remove:true});

memcached.touch('key', 10, function (err) { /* stuff */ });


memcached.connect( '192.168.0.103:11211', function( err, conn ){
  if( err ) throw new Error( err );
  console.log( conn.server );
});

memcached.get('foo', function (err, data) {
  console.log(data);
});

memcached.gets('foo', function (err, data) {
  console.log(data.foo);
  console.log(data.cas);

  // Please note that the data is stored under the name of the given key.
});


memcached.getMulti(['foo', 'bar'], function (err, data) {
  console.log(data.foo);
  console.log(data.bar);
});

memcached.set('foo', 'bar', 10, function (err) { /* stuff */ });

memcached.replace('foo', 'bar', 10, function (err) { /* stuff */ });

memcached.add('foo', 'bar', 10, function (err) { /* stuff */ });

memcached.append('foo', 'bar', function (err) { /* stuff */ });

memcached.preprend('foo', 'bar', function (err) { /* stuff */ });

memcached.incr('foo', 10, function (err) { /* stuff */ });
memcached.decr('foo', 10, function (err) { /* stuff */ });

