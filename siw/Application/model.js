	/* variables */
var fs = require('fs'),
	assert = require('assert'),
	restify = require('restify'),
	xml2js = require('xml2js'),
    parser = new xml2js.Parser();


	/* methods */
exports.listClient = function(req, res, callback) {
	var listFiles = [];
	readurlXML(function(sawList){
		sawList.forEach(function(saw){
			callService(saw, function(files){
				listFiles = listFiles.concat(files);
			});
			console.log(listFiles);
		});
		callback(listFiles);
	});
}

function callService(sawUrl, callback) {
	var wsClient = restify.createJsonClient({
		url : sawUrl,
		version : '~0.0.1'
	});		//console.log(wsClient);
	console.log('> Calling the servcie: ' + wsClient.url.href + 'list');
	wsClient.get(wsClient.url.href + 'list', function(err, req, res, obj){
		assert.ifError(err);
		if (obj.list) {
			//console.log('> Recived %j', obj);
			//listFiles = listFiles.concat(obj.list.files);
			callback(obj.list.files);
		} else {
			console.log('ERROR');
			//callback('ERROR');
		}
	});
}

function readurlXML(callback) {
    console.log('> Reading saw.xml ....');
    fs.readFile(__dirname + '/public/saw.xml', function(err, data) {
        parser.parseString(data, function (err, result) {
            console.log(result.servers.saw);
            callback(result.servers.saw);
        });
    });
}