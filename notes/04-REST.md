# REST

## Intro
In this project we are also looking at REST API implementation as this would be a important par of full stack development. 

## POST 

[web extension: postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en)

Here in there postman app we use create a POST request at `http://localhost:8000/api`.
Using the header: `content-type: application/json`.

```js

  // Required middleware
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());

  // Mongoose connection
  mongoose.connect('mongodb://localhost/booksAPI');
  let Book = require('./models/bookModel');

  // using mongoose 
  .post(function(req, res){

    // using body parser we can access the body from req.body
    let book = new Book(req.body);

    // add item to database
    book.save();

    // response back to give us the id of the book.
    res.status(201).send(book);
  })
```

## PUT
Replaces one record with another


