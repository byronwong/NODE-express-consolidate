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

## Adding options
```js 
  const options = {
    root: __dirname + '/src/',
    extensions:  ['html', 'htm']
  }

  // STATIC SERVER
  app.use(express.static('src', options));

  // Routing static 
  app.use('/api', express.static(path.join(__dirname, 'src')));

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

## Environmental variables
https://www.youtube.com/watch?v=HRBNeERE5PU
We sometimes want to hide variables, and ensure these are not shipped to our repo, we can do this with environmental variables. This is useful for storing usernames and passwords for APIs.

- First ensure `.gitignore` has `.env` added.  
- install `npm i -S dotenv`
- import `import dotenv from 'dotenv'`;
- ensure that to add `dotenv.config();` at the top before any env variables are need, includes imported files
- create `.env` file in root
- add variables e.g. `USER_NAME=SomeValue` 
- add placeholder variables into your code using `process.env.USER_NAME`
