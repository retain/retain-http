
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

app.use('/xdomain', function(req, res, next){
  if (!req.get('Origin')) return next();
  res.set('Access-Control-Allow-Origin', req.get('Origin'));
  res.set('Access-Control-Allow-Credentials', 'true');
  res.set('Access-Control-Allow-Methods', 'POST');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});

app.get('/', function(req, res){
  res.redirect('/index.html');
});

app.use(express.static(__dirname));

console.log("__dirname", __dirname);

var server = app.listen(4000, function() {
console.log('Test server listening on port %d', server.address().port);
});