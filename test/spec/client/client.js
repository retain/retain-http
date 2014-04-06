var retain = require("retain");
var retainAjax = require("../../../lib/client");
var assert = require("chai").assert;
var shared = require("./../shared")
var mocha = require("mocha");

mocha.setup('bdd')

describe("RetainAjax", function()
{
  before(function()
  {
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