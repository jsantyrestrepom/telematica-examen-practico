/* variables */
var fs = require('fs'),
assert = require('assert'),
restify = require('restify'),
EventEmitter = require('events').EventEmitter,
filesEE = new EventEmitter();



/* methods */
/*filesEE.on('files_ready', function(){
    console.log(listFiles);
});*/

exports.list = function (req, res, callback) {
    listFiles = '{ "files" : [';
    var arr = [];
    var sharedir = ['/home/lcamach1/jsrm', 'home/lcamach1/jsrm/webimagen'];
    sharedir.forEach(function(dir){
	arr = listarArchivos(dir);
	console.log(arr);
	//listFiles += ;
	console.log('> '+ dir + ' leido');
	//filesEE.emit('files_ready');
	console.log('> ' + listFiles);
    listFiles += '] }'; 
    callback(listFiles);
    });
    //listFiles = listFiles.substring(0,listFiles.length-1);
   
};


//sync
function listarArchivos(dir) {
    console.log('> leyendo ' + dir);
    return fs.readdirSync(dir).filter(function(filename){
	return fs.statSync(filename).isFile();
    });
}
//async
/*
function listarArchivos(dir, callback) {
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
*/