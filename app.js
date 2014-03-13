
/**
 * Module dependencies.
 */

var indexController = require('./controllers/indexController.js')
var contentController = require('./controllers/contentController.js')

var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/rescuedogs')

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/login', indexController.login);
app.get('/index', indexController.index)
app.get('/resources', contentController.resources)
app.get('/dogs', contentController.displayDogs)
app.get('/locator', contentController.locator)

app.get('/resourcesDirection', function (req, res) {
	res.redirect('/resources')
})
app.get('/dogsDirection', function (req, res) {
	res.redirect('/dogs')
})

app.get('/locatorDirection', function (req,res) {
	res.redirect('/locator')
})



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
