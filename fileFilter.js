//A seperate module consisting of stuff inorder to understand how things work in modular world
//Sample to fetch list of files in a directory having a specific extension
var fs = require('fs');
var path = require('path');
var filefilter = undefined;
//Function to read list of files in a directory
module.exports = function FilterDir(directory, ffilter, printCallback){
	filefilter = ffilter;
	fs.readdir(directory, function filesList(err, files){
		if(err) return printCallback(err);
		var filteredFiles = files.filter(filterFiles);
		printCallback(null, filteredFiles);
	});
	
}
//Function to filter files based on its extension 
function filterFiles(file){
	if(path.extname(file) == '.' + filefilter){
		return true;
	}
	return false;
}