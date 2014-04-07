![retain-http](assets/logo.jpg)
===========

[Retain](https://github.com/retain/retain) REST webservice plugin

[![Build Status](https://travis-ci.org/retain/retain-http.png?branch=master)](https://travis-ci.org/retain/retain-http) [![Coverage Status](http://coveralls.io/repos/retain/retain-http/badge.png)](https://coveralls.io/r/retain/retain-http)

### Example

To start saving the __Retain__ data in a REST webservice, simply inject the plugin into the Model.

``` javascript
var retain = require("retain");
var retainAjax = require("retain-http");

var Movies = retain();

Movies.use(retainAjax, {
      url: "http://localhost:3000/movies"
    })
```

### Client version

If you want you use __retain-http__ in the browser, there are 2 options:

* If your bundler have implemented the `package.son` (https://gist.github.com/defunctzombie/4339901)[`browser`] spec, just require the file using the `require` signature:
  ``` javascript
  require("retain-http");
  ```
* Otherwise, require the `lib/client.js` file using the CJS signature
> using a build tool for the client (Browserify, Polvo, etc)

### Config

* __url__: REST URL that will be used to save the data.

### Creating a plugin

[Retain](https://github.com/giuliandrimba/retain) use Promises internally to transfer data between the plugins.

To create a plugin, it is necessary to implement each of the following __Retain__ methods.

* __new__
* __all__
* __set__
* __find__
* __remove__

Each of theses methods must return a promise.

### Tests

To run the tests in the server:

`make test`

To run the tests in the browser:

> Initialize the server where the data will be requested:

` make server`

> Initialize the server to see the tests outputs

` make test-browser`

Visit `localhost:4000/` in the browser.
