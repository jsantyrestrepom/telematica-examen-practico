	/* variables */
var restify = require('restify'),
	services = require('./services'),
	server = restify.createServer({
		name : 'myserver',
		version : '0.0.1'
	});


	/* configurations */
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.listen(8081, function(){
	console.log('%s listening at %s \n', server.name, server.url);
});


	/* paths */
server.get('/echo/:name', function(req, res, next){		// test
    res.send(req.params);
    return next();
});

server.get('/list', function(req, res, next){
    console.log('=> Service called !');
    services.list(function(data){
    	console.log('=> Sending response !\n')
		res.send({'list' : JSON.parse(data)});
		return next();
    });	
});


// var express = require('express'),
// 	app = express(),
// 	downloadServer = require('http').createServer(app);
// downloadServer.listen(8084);
// app.use(express.directory('C:\\Users\\Fredy\\Pictures'));
// console.log('C:\\Users\\Fredy\\Pictures');