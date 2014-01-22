"use strict"

var Q = require("q");

var RetainAjax = (function()
{
  function RetainAjax()
  {

  }

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
    return Q(record)
  }

})()

module.exports = RetainAjax