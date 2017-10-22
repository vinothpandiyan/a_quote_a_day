var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});

var port = process.env.port || 8080;

app.listen(port, function(request, response){
    console.log("Server ready @ http://localhost:8080");
});