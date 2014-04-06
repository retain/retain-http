
/**
 * Module dependencies.
 */

var express = require('express');

var app = express();

app.set('json spaces', 0);

app.use(function(req, res, next){
  if ('/echo' != req.url) return next();
  res.set(req.headers);
  req.pipe(res);
});

app.use(express.bodyParser());
app.use(express.cookieParser());

app.use(function(req, res, next){
  res.cookie('name', 'tobi');
  next();
});

app.all('*', function(req, res, next)
{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  next();

});

app.get('/', function(req, res){
  res.redirect('/index.html');
});

app.use(express.static(__dirname));

var server = app.listen(4000, function() {
console.log('Test server listening on port %d', server.address().port);
});