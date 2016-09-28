//Sample to understand working of 'fs'(Sync file IO) in node.js
var fs = require('fs');
var fileBuffer = fs.readFileSync(process.argv[2]);
var strBuffer = fileBuffer.toString();
var splittedBuffer = strBuffer.split('\n');
console.log(splittedBuffer.length - 1);
