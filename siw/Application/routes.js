	/* variables */
var model = require('./model');


	/* methods */
// return the ejs templates with the apropiate data
exports.index = function(request, response) {
	console.log('> index request');
	response.render('index', {filesList : ''});
};

exports.list = function(request, response) {
	var data = '';
	console.log('=> list request');
	model.listClient(request, response, function(data){
		console.log('=> response ! \n');	//console.log(data);
		if (data == 'ERROR')
			response.render('index', {filesList : 'ERROR'});
		else
			response.render('index', {filesList : data});
	});
};