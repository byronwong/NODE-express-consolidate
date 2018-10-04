# Getting started
[Basic implementation](https://expressjs.com/en/starter/hello-world.html)

## Setting a basic server
```js
  var express = require('express');
  var app = express();

  var port = 8000;
  app.listen()port, function(err){
    console.log('server running on port: ' + port);
  };
```


## Serving up static files
[Static Files](https://expressjs.com/en/starter/static-files.html)

- Use this middleware to allow access to assets such are img, css and js.
- N: Remember to require `PATH`.
```javascript 
  // Basic 
  var path = require('path');
  app.use(express.static('public'));

  // Recommended (externally hosted)
  app.use(express.static(path.join(__dirname, 'public')));

  app.get('/', function(req,res){
      // N: sendFile works independently from static middleware.
      res.sendFile('index.html', {root: 'src'});
  });
```

## Node 
[Frontend masters course slides](http://fem-node-api.netlify.com/)
Node used common JS as a module loader.
```js 
  let item = require('node_module');
```

## Node Exporting 

```js
  // Individual exports
  // config.js
  exports.setup = function() {};
  exports.enable = function() {};
  exports.ready = true;

  // file export via module.exports
  // otherfile.js
  module.exports = {
    action: function(){},
    trigger: true
  }

  // Note: if you can only use one module.exports, but you can add everything to the object
```
