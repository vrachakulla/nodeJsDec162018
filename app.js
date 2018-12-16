var express = require('express');
var app = express();
var port = process.env.PORT || 8080;


app.listen(port, function(){
console.log("Server up and running...");
});


app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});
