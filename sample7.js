//Sample to understand the working of 'http' module in node.js
var http = require('http');
var app = http.createServer(function(request, response){
	//The server catches all request using the request listener callback
});
app.listen(3000, function serverListener(){
	//console.log('Server is up and running ...');
});
//Sample get handler to understand how get requests work in node.js
http.get(process.argv[2], function(response){
	//Set the encoding to 'utf8' and listen for data event
	response.setEncoding('utf8');
	response.on('data', function(data){
		console.log(data);
	});
}).on('error', function errorCallback(err){
	console.log('Error occured : ' + err);
});
