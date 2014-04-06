var Q = require("q");
var request = require("superagent");

module.exports = function()
{
  return require("./index")(Q, request);
}