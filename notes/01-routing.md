# Routing 

[Docs](https://expressjs.com/en/guide/routing.html)
[app.route()](https://expressjs.com/en/guide/routing.html#app-route)
[express.Router](https://expressjs.com/en/guide/routing.html#express-router)

## GET requests
```javascript
  app.get('/yourPath', function(req, res){
      res.send('hello world');
  });
```

## SendFile
- In our route you may want to send a file instead of a message.
- You must specify a root, as this works independently from `static server`.
```javascript
  app.get('/', function(req, res){
    res.sendFile('sandbox.html', {root:'src'}); // NOTE: no '/' before 'src'
    // OR
    res.sendFile('sandbox.html', {root:__dirname + '/src'}); // NOTE: '/' before 'src'
    // OR (requires PATH)
    res.sendFile('sandbox.html', {root: path.resolve(__dirname, 'src')}); // N: ',' instead of '+'
  });
```


## Using Routers
Routers allow us to group our routes, instead of writing all our routes on one file.
Note: docs give a silghtly different method.
[express.Router](https://expressjs.com/en/guide/routing.html) 
```javascript 

  // create your router
  var yourRouter = express.Router();

  yourRouter.route('/')
    .get(function(req, res){
      // reder booklist.ejs
      res.render('your view', {
        // passing object containing parameters we want the page to have
        title: 'Hello from render',
        books: books
      }
    );
  });
```

## using routers and route with middleware
```js
  // Create a router object
  let bookRouter = express.Router();

  // here this is actually /books
  bookRouter.route('/')
  .get(function(req, res){
    res.send('Hello books...');
  });

  // here this is /books/single
  bookRouter.route('/single')
  .get(function(req, res){
    res.send('Hello Single book...');
  });

  // middleware - for requests with /books use the bookRouter
  app.use('/books', bookRouter);
```

## Breaking Routers into separate files
Use: `app.use('/yourRoute', yourRouter);`
This is saying for this route: `/yourRoute` use the router `yourRouter`.
Be sure to require the file: `var yourRouter = require('./src/routes/yourRoutes');`


## Router Functions
For this project we used router functions to pass data to our router.
To do this, use `module.exports` and instead of returning an object we return a function.
So when we require the module we do this:
`var router = require('./yourPath/yourModule')(param)`

```javascript
  // In a separate file we have a function
  var router = function(nav){

    bookRouter.route('/')
    .get(function(req, res){
      res.render('booklist', {
        title: 'Booklist',
        nav: nav,
        books: books
      });
    });
    
    // example of route with parameter
    bookRouter.route('/:id')
    .get(function(req, res){
      var id = req.params.id;
      res.render('bookview', {
        title: 'Book',
        nav: nav,
        book: books[id]
      });
    });

    return bookRouter;
  };

  module.exports = router;
```

## Route Params
We can access parameters from the url via `req.params.<itemName>`
In the router functions example you will see we use:
Note: the `:` says that this part of the url is a parameter
`var id = req.params.id` for the route `localhost:8000/books/:id` or `localhost:8000/books/:1`
