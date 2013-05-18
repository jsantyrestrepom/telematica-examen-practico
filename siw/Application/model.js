	/* variables */
var assert = require('assert'),
	restify = require('restify');


	/* methods */
exports.listClient = function(req, res, callback) {
	var sawList = ['http://localhost:8081'];

	sawList.forEach(function(saw){
		var wsClient = restify.createJsonClient({
				url : saw,
				version : '~0.0.1'
			}); console.log(wsClient);
		console.log('> Calling the servcie !');console.log(wsClient.url.href + 'list');
		wsClient.get(wsClient.url.href + 'list', function(err, req, res, obj){
			assert.ifError(err);
			if (obj.list) {
				//console.log('> Recived %j', obj);
				callback(obj.list.files);
			} else {
				callback('ERROR');	
			}
		});
	});
}