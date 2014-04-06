var Q = require("q");
var request = require("./../node_modules/superagent/lib/client") || window.superagent;

module.exports = function()
{
  return require("./index")(Q, request);
}