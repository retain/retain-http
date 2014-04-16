module.exports = function(Q, request)
{
  "use strict"

  var api = {}

  api.config = {
    rest:"",
    search:""
  }
  api.new = _new;
  api.set = _set;
  api.find = _find;
  api.all = _all;
  api.remove = _remove;

  function _new(record)
  {

    var deferred = Q.defer();

    request
      .post(this.config.rest)
      .send(record)
      .set('Accept', 'application/json')
      .end(function(error, res)
      {
        _handler(deferred, res);
      });

    return deferred.promise;
  }

  function _set(record)
  {
    var deferred = Q.defer();

    request
      .post(this.config.rest+"/"+record.id)
      .send(record)
      .set('Accept', 'application/json')
      .end(function(error, res)
      {
        _handler(deferred, res);
      });

    return deferred.promise;
  }

  function _find(id)
  {
    var deferred = Q.defer();

    request
      .get(this.config.rest+"/"+id)
      .set('Accept', 'application/json')
      .end(function(error, res)
      {
        _handler(deferred, res);
      });

    return deferred.promise;
  }

  function _search(record)
  {
    var deferred = Q.defer();

    request
      .get(this.config.search)
      .set('Accept', 'application/json')
      .end(function(error, res)
      {
        _handler(deferred, res, record);
      });

    return deferred.promise;
  }

  function _all(records)
  {
    var deferred = Q.defer();

    request.get(this.config.rest, function(res)
    {
      _handler(deferred, res);
    });

    return deferred.promise;
  }

  function _remove(id)
  {
    var deferred = Q.defer();
    request
      .del(this.config.rest + "/" + id)
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

  return api;
}