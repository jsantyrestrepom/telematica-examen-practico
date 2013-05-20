	/* variables */
var express = require('express'),
	routes = require('./routes'),
	app = express(),
	server = require('http').createServer(app);

server.listen(8080);
console.log('=> server running .... \n');


	/* configuration */
app.configure(function(){
    app.set('view engine', 'ejs');
    app.set('views', __dirname + '/views');
    app.use(express.bodyParser());
    app.use('/static', express.static(__dirname + '/public'));
});


	/* paths */
app.get('/', routes.index);
app.get('/list', routes.list);
app.get('/find?', routes.find);