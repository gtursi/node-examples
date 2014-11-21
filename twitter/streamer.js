var sys     =  require('sys'),
    http    =  require('http'),
    url     =  require('url'),
    path    =  require('path'),
    fs      =  require('fs'),
    events  =  require('events');
 
var tweet_emitter  = new events.EventEmitter();
 
var express = require('express');
var app = express();

app.use(express.static(__dirname));
console.log(__dirname);
app.listen(15246);

function get_tweets() {
 
  var request = http.request({
    method:'GET',
    port:80,
    path:'/1.1/statuses/user_timeline.json?include_entities=true&include_rts=true&screen_name=sam3k_&count=2',
    hostname:'api.twitter.com'
  });
 
  request.addListener( 'response', function(response) {
    var body = '';
   
    response.addListener( 'data', function(data) {
      body += data;
    });
 
    response.addListener( 'end', function() {
      var tweets = JSON.parse(body);
      if( tweets.length > 0) {
        tweet_emitter.emit('tweets', tweets);
      }
    });
 
  });
 
  request.end();
}
 
setInterval( get_tweets, 5000 );
 
http.createServer(function(request, response) {
  var uri = url.parse(request.url).pathname;
	console.log(uri);
  if(uri === '/stream') {
   
    var listener = tweet_emitter.addListener('tweets', function(tweets) {      
      response.statusCode = 200;
      response.write(JSON.stringify(tweets));
      response.end();
      clearTimeout(timeout);
    });
 
    var timeout = setTimeout(function(){
		console.log('Timeout!');
      response.setHeader('Content-Type', 'text/plain');
      response.write('ERROR!');
      response.end();
      //tweet_emitter.removeListener(listener);
    },2000);
  }
}).listen(15248);
 
sys.puts('Server Running at http://da03d.cajval.sba.com.ar:15248/');

