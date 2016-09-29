var fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function onFileRead(err, obj){
if(err) throw err;
//console.log('The file has been read successfully');
var count = obj.split('\n').length - 1;
console.log(count); 
});

