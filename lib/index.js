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
  return Q(record)
}

RetainAjax.prototype.set = function(record)
{
  return Q(record)
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

RetainAjax.prototype.remove = function(id)
{
  return Q(record)
}