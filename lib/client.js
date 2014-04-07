var Q = require("q");
var request = require("./../node_modules/superagent/lib/client") || window.superagent;
var retain = require("./index")(Q, request);

module.exports = window.retain = function()
{
  return retain;
}

