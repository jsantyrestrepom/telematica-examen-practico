    /* variables */
var fs = require('fs'),
    assert = require('assert'),
    restify = require('restify'),
    xml2js = require('xml2js'),
    parser = new xml2js.Parser();


    /* methods */
exports.list = function (callback) {
    listFiles = '{ "files" : [';
    var files = 'null';
    readdirXML(function(sharedir){
        sharedir.forEach(function(dir){
            files = loaddirSync(dir + '/'); 
            listFiles += files;
        });
        if (files == 'null')
            listFiles += '] }';
        else
            listFiles = listFiles.substring(0, listFiles.length - 1) + '] }';;
        callback(listFiles);
    });
}


function readdirXML(callback) {
    console.log('> Reading sharedirs.xml ....');
    fs.readFile(__dirname + '/public/sharedirs.xml', function(err, data) {
        parser.parseString(data, function (err, result) {
            console.log(result.dirs.dir);
            callback(result.dirs.dir);
        });
    });
}


    // sync version
function loaddirSync(dir) {
    var files, jfiles = '';
    console.log('> Reading ' + dir);
    files = fs.readdirSync(dir).filter(function(filename){
	   return fs.statSync(dir + filename).isFile();
    });
    files.forEach(function(f){
	   jfiles += '{ "filename" : "' + f + '", "url" : "' + f + '" },';
    });
    console.log('> '+ dir +' readed');
    return jfiles;
}

    // async version
// function loaddirAsync(dir, callback) {
//     console.log('> Reading ' + dir);
//     fs.readdir(dir, function(err, files){
// 	var listFiles = '';
// 	if (err) throw err;
// 	files.forEach(function(file){
// 	    //console.log(file);
// 	    listFiles += '{filename : ' + file + ', url : ' + __dirname + dir + '/' + file + '},\n';
// 	   // callback(listFiles);
// 	});
// 	//console.log(listFiles);
// 	callback(listFiles);
//     });
// };