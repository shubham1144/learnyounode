//Sample to understand the working of module.exports in node.js
var filterModule = require('./fileFilter.js');
filterModule(process.argv[2], process.argv[3], function onComplete(err, ffiles){
	if(err) throw err;
	console.log(ffiles.join("\r\n"));
});