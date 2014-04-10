var Q = require("q");
var request = require("./../node_modules/superagent/lib/client");
var retain = require("./index")(Q, request);

module.exports = function()
{
  return retain;
}

