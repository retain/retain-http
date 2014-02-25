"use strict"

var Q = require("q");
var request = require("superagent");

module.exports = function(){
  return new RetainAjax();
};

function RetainAjax()
{

}

RetainAjax.prototype.config = {url:""}

RetainAjax.prototype.new = function(record)
{
  var deferred = Q.defer();

  request
    .post(this.config.url)
    .send(record)
    .set('Accept', 'application/json')
    .end(function(error, res)
    {
      _handler(deferred, res, record);
    });

  return deferred.promise;
}

RetainAjax.prototype.set = function(record)
{
  var deferred = Q.defer();

  request
    .post(this.config.url+"/"+record.id)
    .send(record)
    .set('Accept', 'application/json')
    .end(function(error, res)
    {
      _handler(deferred, res, record);
    });

  return deferred.promise;
}

RetainAjax.prototype.find = function(record)
{
  var deferred = Q.defer();

  request
    .get(this.config.url+"/"+record.id)
    .set('Accept', 'application/json')
    .end(function(error, res)
    {
      _handler(deferred, res, record);
    });

  return deferred.promise;
}

RetainAjax.prototype.all = function(records)
{
  var deferred = Q.defer();

  request.get(this.config.url, function(res)
  {
    _handler(deferred, res);
  });

  return deferred.promise;
}

RetainAjax.prototype.remove = function(record)
{
  var deferred = Q.defer();
  request
    .del(this.config.url + "/" + record.id)
    .set('Accept', 'application/json')
    .end(function(res)
    {
      _handler(deferred, res);
    });

  return deferred.promise;
}

function _handler(deferred, res, record)
{
  if(res.error) 
  {
    deferred.reject(new Error(res.error));
  } 
  else 
  {
    if(record)
      _update(res.body, record);

    deferred.resolve(res.body);
  }
}

function _update(props, record)
{
  for(var p in props)
  {
    record[p] = props[p];
  }
}