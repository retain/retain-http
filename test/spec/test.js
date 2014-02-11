var retain = require("retain");
var retainAjax = require("../../lib/index");
var assert = require("chai").assert;

describe("RetainAjax", function()
{

  var Movies = retain();

  Movies.attrs({
    name:String,
    watched:Boolean
  })

  it("it should add retain-ajax as a plugin", function(done)
  {
    Movies.use(retainAjax, {
      url: "http://localhost:3000/movies"
    })

    done();
  })

  it("it should get all the movies", function(done)
  {
    Movies.all(function(res, err)
    {
      if(res)
      {
        done();
      }
    });
  });

});