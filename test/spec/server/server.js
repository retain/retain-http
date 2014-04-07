var retain = require("retain");
var server = require("../../fixtures/server/server")
var retainAjax = require("../../../lib/server");
var assert = require("chai").assert;
var shared = require("./../shared")

describe("RetainAjax", function()
{
  before(function()
  {
    server.start();

    this.Movies = retain();
    this.enterTheVoid = null;
    this.retainAjax = retainAjax;

    this.Movies.attrs({
      name:String,
      watched:Boolean
    })

  });

  shared.runTests()

});
