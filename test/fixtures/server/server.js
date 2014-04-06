var express = require('express');

var app = express();

app.use(express.bodyParser());

var records = [];
records.push({name:"Factotum", watched:true, id:0});
records.push({name:"Old Boy", watched:true, id:1});
records.push({name:"Blue Jasmine", watched:false, id:2});

function find(id)
{
  var record = null;

  for(var i = 0; i < records.length; i++)
  {
    if(records[i].id == id)
    {
      record = records[i];
      return record;
    }
  }

  return record;
}

app.get('*', function(req, res, next){
  if (!req.get('Origin')) return next();
  res.set('Access-Control-Allow-Origin', req.get('Origin'));
  res.set('Access-Control-Allow-Credentials', 'true');
  res.set('Access-Control-Allow-Methods', 'POST');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  if ('OPTIONS' == req.method) return res.send(200);
  next();
});

app.get('/movies', function(req, res)
{
  res.send(records);
});

app.post('/movies', function(req, res)
{
  var record = req.body;
  record.id = records.length;
  records.push(record);
  res.send(record);
});

app.post('/movies/:id', function(req, res)
{
  var id = req.params.id
  var props = req.body;

  var record = find(id);

  if(record)
  {
    for(var p in props)
    {
      record[p] = props[p];
    }

    res.send(record);
  }
  else
  {
    res.send(500, { error: 'something blew up' });
  }

});

app.delete("/movies/:id", function(req, res)
{
  var id = req.params.id;

  for(var i = 0; i < records.length; i++)
  {
    if(records[i].id == id)
    {
      records.splice(i,1);
    }
  }

  res.send({});
})

app.get("/movies/:id", function(req, res)
{
  var id = req.params.id;
  var found = null;

  for(var i = 0; i < records.length; i++)
  {
    if(records[i].id == id)
    {
      found = records[i];
    }
  }

  if(found)
    res.send(found);
  else
    res.send(500, { error: 'something blew up' });
});

exports.start = function()
{
  app.listen(3000);
  console.log('Listening on port 3000');
}
