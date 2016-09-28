//Sample to understand flow over the Http channel
//const is a indicator that the value will not be reassigned
const http = require('http');
const net  = require('net');
const url  = require('url');
const serverPort = 3000;
var fs = require('fs');
//Trying to understand callbacks in node
//Trying to understand the asynchronous functionality of the 'fs' module provided by node.js
fs.unlink('./input.txt', function postDelete(err){
	try{
		if(err) throw err;
		console.log('Successfully deleted file...');	
	}
	catch(ex){
		console.log(ex);
	}
});
try{
	fs.unlinkSync('./input.txt');
}
catch(ex){
	console.log(ex);
}
//Trying to understand the synchronous functionality of 
console.log("Line after the fs logic");
//trying to understand the parsing of url using url module provided by node.js
var testUrl = url.parse('http://localhost:7000/t/e/s/t?testquery=testvalue');
console.log('The parsed query value is : ' + testUrl.query);
console.log('The parsed path value is : ' + testUrl.path);
//Create a server and let the server listen on a port, so that its up and running
var server = http.createServer( function handleRequests(request, response){
	response.end('Request handled by server...');
});

server.listen(serverPort, function(){
	console.log("Server is up and running on port : " + serverPort);
});

//Let us now try to understand callback Hell in node.js
//Let us see a function associated with a assignment
var foo = function foo(){
	console.log("I am a function associated with an assignment...");
}

var foo1 = function (){
	console.log("I am another function associated with an assignment...");
}