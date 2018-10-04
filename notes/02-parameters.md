## Passing parameters
- we can pass parameters like this:
- the link will look like this:
- /books/single/foo
```js
  bookRouter.route('/single/:message')
  .get(function(req, res){
    res.send(`Hello Single book (${req.params.message}) ...`);
  });
```


## Query parameters
- You can pass parameters via the url e.g. `http://localhost:3000/home/?firstName=Byron&lastName=Wong`
- We can use the following to see what parameters where sent.
```js
  app.get('/home', function(req,res){
    res.sendFile('page.html', {root: __dirname + '/source'});
    res.json(req.query); //JSON.stringify is the reverse fn
    res.end();
  });
```

- alt: you can enter the query in the url bar and the browser will escape the string.
```js

  apiRouter.route('/')
  .get(function(req, res){
    // Test message
    // let message = {'hello' :'this is the books API'};
    // res.json(message);

    // note here req has query property, which we are passing to the find method
    // this is a basic implementation please sanitize user inputs
    Book.find(req.query, function(err, books){
      if(err){
        res.status(500).send(err);
      } else {
        res.json(books);
      }
    })
  });

```


## Making use of parameters
- Using the url: `http://localhost:3000/home/?firstName=Byron&lastName=Wong`
- We can output the parameters into a message ... and more.
> The code below is for demo purposes, please encode the response as we can easily inject code here.
```js 
  app.get('/', function(req,res){
    var responseMessage = 'Hello ' + req.query.firstName;
    res.send(responseMessage);
  });
```


## POST requests
- This is one of the most common http methods used.
- Use post requests if you do not want the data to be pasted via the URL e.g. when you are sending auth data.
- If you are using the `https` protocol then the data will be encrypted.
- See the express [documentation](http://expressjs.com/en/4x/api.html#req.body)
```js
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true })); // for application/x-www-form-urlencoded (html forms)

  app.post('/home', function(req, res){
    if (!req.body) return res.send('No req.body');
    // console.log(req.body);
    res.send(req.body);
  });
```
