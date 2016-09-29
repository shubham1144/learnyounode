//Sample to fetch list of files in a directory having a specific extension
var fs = require('fs');
var path = require('path');
//Function to read list of files in a directory
fs.readdir(process.argv[2], function filesList(err, files){
	var filteredFiles = files.filter(filterFiles);
	console.log(filteredFiles.join("\r\n"));
});
//Function to filter files based on its extension 
function filterFiles(file){
	if(path.extname(file) == '.' + process.argv[3]){
		return true;
	}
	return false;
}