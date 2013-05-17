	/* variables */
var restify = require('restify'),
services = require('./model'),
	server = restify.createServer({
		name : 'myserver',
		version : '0.0.1'
	});


	/* configurations */
server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.listen(8004, function(){
	console.log('%s listening at %s', server.name, server.url);
})


	/* paths */
server.get('/echo/:name', function(req, res, next){		// test
    res.send(req.params);
    return next();
});

server.get('/list', function(req, res, next){
    console.log('=> Service called !');
    services.list(req, res, function(data){
	console.log('> result: %s', data);
	res.send({'list' : JSON.parse(data)});
	return next();
    });	
});