
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = process.env.MONGODB_URI;

MongoClient.connect(url, function(err, db){
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db.close();
});
