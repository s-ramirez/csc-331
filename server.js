// Create an 'express' app
// Express is a web application framework
// Provides a set of tools for web application development
// We will use it to create a server
// Each client (instance of a web browser)
// Will obtain and send information to this server
var express = require('express');
var app = express();
// Create a server that'll respond to all http requests
var http = require('http').Server(app);

// If the user targets '/' return the homepage
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static('assets'));

// Initialize the http server in a specified port
http.listen(3000, function(){
  console.log('Listening on http://localhost:3000');
});
