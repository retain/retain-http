var retain = require("retain");
var retainAjax = require("../../../lib/client");
var assert = window.chai.assert;
var shared = require("./../shared")
var mocha = window.mocha;

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