var retain = require("retain");
var retainAjax = require("../../lib/index");
var assert = require("chai").assert;

describe("RetainAjax", function()
{

  var Movies = retain();
  var enterTheVoid = null;

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

  it("it should create a movie", function(done)
  {
    enterTheVoid = Movies.new(function(res, err)
    {
      if(res)
      {
        done();
      }
    });
  });

  it("it should set the movie properties", function(done)
  {
    var movie = Movies.find(Movies.all().length -1);

    movie.set({name:"Enter the Void", watched: true},function(res, err)
    {
      if(res)
      {
        done();
      }
    });

  });

  it("it should delete the movie", function(done)
  {
    var movie = Movies.find(Movies.all().length -1);

    movie.remove(function(res, err)
    {
      if(res)
      {
        done();
      }
    });

  });

});