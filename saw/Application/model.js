/* variables */
var fs = require('fs'),
assert = require('assert'),
restify = require('restify');


/* methods */
exports.list = function (callback) {
    listFiles = '{ "files" : [';
    var sharedir = ['/home/lcamach1/jsrm', '/home/lcamach1/jsrm/webimagen'],
    files = 'null';
    sharedir.forEach(function(dir){
	files = loaddirSync(dir + '/');	
	listFiles += files;
    });
    if (files == 'null') listFiles += '] }';
    else listFiles = listFiles.substring(0, listFiles.length - 1) + '] }';;
    callback(listFiles);
}


// sync version
function loaddirSync(dir) {
    var files, jfiles = '';
    console.log('> leyendo ' + dir);
    files = fs.readdirSync(dir).filter(function(filename){
	return fs.statSync(dir + filename).isFile();
    });
    files.forEach(function(f){
	jfiles += '{ "filename" : "' + f + '", "url" : "' + f + '" },';
    });
    console.log('> '+ dir +' leido');
    return jfiles;
}

// async version
function loaddirAsync(dir, callback) {
    console.log('> leyendo ' + dir);
    fs.readdir(dir, function(err, files){
	var listFiles = '';
	if (err) throw err;
	files.forEach(function(file){
	    //console.log(file);
	    listFiles += '{filename : ' + file + ', url : ' + __dirname + dir + '/' + file + '},\n';
	   // callback(listFiles);
	});
	//console.log(listFiles);
	callback(listFiles);
    });
};