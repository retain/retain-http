var express = require('express');

var app = express();

app.use(express.bodyParser());

var records = [];
records.push({name:"Factotum", watched:true});
records.push({name:"Old Boy", watched:true});
records.push({name:"Blue Jasmine", watched:false});

app.get('/movies', function(req, res)
{
  res.send(records);
});

app.listen(3000);
console.log('Listening on port 3000');