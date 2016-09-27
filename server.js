//Sample to understand flow over the Http channel
//const is a indicator that the value will not be reassigned
const http = require('http');
const net  = require('net');
const url  = require('url');
const serverPort = 3000;
//trying to understand the parsing of url using url module provided by node.js
var testUrl = url.parse('http://localhost:7000');
console.log('The parsed url value is : ' + testUrl.port);

//Create a server and let the server listen on a port, so that its up and running
var server = http.createServer( function(request, response){
	response.end('Request handled by server...');
});

server.listen(serverPort, function(){
	console.log("Server is up and running on port : " + serverPort);
});