var express = require('express');
var Mongolian = require("mongolian");

var db = new mongolian("mongo://da03d:15247/test");

var server = new Mongolian;

//var db = server.db("awesome_blog");

var app = express.createServer();
app.set('view engine', 'jade');

app.use(express.bodyParser());

app.get('/', function(req,res){
	res.render('index', {layout:false, message:"Hello world again... but from Jade!!!"});
});

app.put('/', function(req,res){

	var deal = req.body.deal;
	var tags = req.body.tags;

	console.log("deal is " + deal + " and tags are " + tags);

	db.collection("deals").insert({
		deal: deal,
		deal_tags: tags.split(",")
	})

	res.contentType('json');
	res.send(JSON.stringify({status:"success"}));

});

app.listen(15246,function(){
	console.log("server listening on port 15246...");
});

