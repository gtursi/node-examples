var mongo = require('mongodb');
var host = "da03d";
var port = 15247;

var db = new mongo.Db("nodetest", new mongo.Server(host, port, {safe:false}));
//var db = new mongo.Db(new mongo.Server("localhost", 27017), {safe:false});

db.open(function(error){
  console.log("connected" + host + ":" + port + " error: " + error);
});

