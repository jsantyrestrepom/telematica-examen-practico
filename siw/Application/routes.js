	/* variables */
var os = require('os'),
	model = require('./model');


	/* methods */
// return the ejs templates with the apropiate data
exports.index = function(request, response) {
	console.log('=> index request');		//console.log(os.hostname());
	response.render('index', {hostname : os.hostname(), message : '', filesList : []});
};

exports.list = function(request, response) {
	var hostname = os.hostname(),
		data = '';
	console.log('=> list request');
	model.listClient(request, response, function(data){
		console.log('=> response ! \n');
		if (data == 'ERROR')
			response.render('index', {hostname : hostname, message : 'ERROR', filesList : []});
		else
			response.render('index', {hostname : hostname, message : '', filesList : data});
	});
};

exports.find = function(request, response) {
	console.log('=> find request');
	response.render('index', {hostname : os.hostname(), message : 'En implementacion.', filesList : []});
};