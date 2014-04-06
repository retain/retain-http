exports.runTests = function()
{
  it("it should add retain-ajax as a plugin", function(done)
  {
    this.Movies.use(this.retainAjax, {
      url: "http://localhost:3000/movies"
    })

    done();
  })

  it("it should get all the movies", function(done)
  {
    this.Movies.all(function(res, err)
    {
      if(res)
      {
        done();
      }
    });
  });

  it("it should create a movie", function(done)
  {
    this.enterTheVoid = this.Movies.new(function(res, err)
    {
      if(res)
      {
        done();
      }
    });
  });

  it("it should set the movie properties", function(done)
  {
    var movie = this.Movies.find(1);

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
    var movie = this.Movies.find(1);

    movie.remove(function(res, err)
    {
      if(res)
      {
        done();
      }
    });

  });

  it("it should find a movie by ID", function(done)
  {
    var id = 2;

    this.Movies.find(2, function(res, err)
    {
      if(res)
      {
        done();
      }
    });

  });

  it("it should add retain-ajax with errors", function(done)
  {
    this.Movies.use(this.retainAjax, {
      url: "http://localhost:3000/movies2"
    })

    done();
  })

  it("it should throw an error when all rejects", function(done)
  {
    this.Movies.all(function(res, err)
    {
      if(err)
      {
        done();
      }

    });
  });

  it("it should throw an error when creating a movie", function(done)
  {
    this.enterTheVoid = this.Movies.new(function(res, err)
    {
      if(err)
      {
        done();
      }
    });
  });

  it("it should throw an error when setting the movie properties", function(done)
  {
    var movie = this.Movies.find(2);

    movie.set({name:"Enter the Void", watched: true},function(res, err)
    {
      if(err)
      {
        done();
      }
    });

  });

  it("it should throw an error when removing the movie", function(done)
  {
    var movie = this.Movies.find(2);

    movie.remove(function(res, err)
    {
      if(err)
      {
        done();
      }
    });

  });
}