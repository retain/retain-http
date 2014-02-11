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
    .post(RetainAjax.prototype.config.url)
    .send(record)
    .set('Accept', 'application/json')
    .end(function(error, res)
    {
      if(res.error) 
      {
        deferred.reject(new Error(res.error));
      } 
      else 
      {
        set(res.body, record);
        deferred.resolve(res.body);
      }
    });

  return deferred.promise;
}

RetainAjax.prototype.set = function(record)
{
  var deferred = Q.defer();

  request
    .post(RetainAjax.prototype.config.url+"/"+record.id)
    .send(record)
    .set('Accept', 'application/json')
    .end(function(error, res)
    {
      if(res.error) 
      {
        deferred.reject(new Error(res.error));
      } 
      else 
      {
        set(res.body, record);
        deferred.resolve(res.body);
      }
    });

  return deferred.promise;
}

RetainAjax.prototype.find = function(id)
{
  return Q(record)
}

RetainAjax.prototype.all = function(records)
{
  var deferred = Q.defer();

  request.get(RetainAjax.prototype.config.url, function(res)
  {
    if(res.error) 
    {
      deferred.reject(new Error(res.error));
    } 
    else 
    {
      deferred.resolve(res.body);
    }
  });

  return deferred.promise;
}

RetainAjax.prototype.remove = function(record)
{
  var deferred = Q.defer();
  request
    .del(RetainAjax.prototype.config.url + "/" + record.id)
    .set('Accept', 'application/json')
    .end(function(error, res)
    {
      if(res.error) 
      {
        deferred.reject(new Error(res.error));
      } 
      else 
      {
        deferred.resolve(res.body);
      }
    });

  return deferred.promise;
}

function set(props, record)
{
  for(var p in props)
  {
    record[p] = props[p];
  }
}