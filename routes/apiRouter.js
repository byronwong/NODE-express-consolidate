let express = require('express');

// create a function that will be returned
// we use a function so we can inject arguments in
let route = function(Book) {

  // ---
  // API routing
  let apiRouter = express.Router();

  // root route
  apiRouter.route('/')
  .post(function(req, res){
    let book = new Book(req.body);

    book.save(); // add to db

    // console.log(book)
    res.status(201).send(book);
  })
  .get(function(req, res){
    // let message = {'hello' :'this is the books API'};
    // res.json(message);

    // santiize query
    let query = {};

    if(req.query.genre) {
      query.genre = req.query.genre;
    }

    Book.find(req.query, function(err, books){
      if(err){
        res.status(500).send(err);
      } else {
        // console.log('success', books);
        res.json(books);
      }
    });
  });

  // middleware to handle repeative task
  apiRouter.use('/:bookId', function(req, res, next){
    Book.findById(req.params.bookId, function(err, book){
      if(err){
        res.status(500).send(err);
      } else if(book) {
        // add the found book to the request
        req.book = book;
        next();
      } else {
        res.status(404).send('could not find book...');
      }
    });
  });

  // getting a single book
  apiRouter.route('/:bookId')
    .get(function(req, res){
      res.json(req.book);
    })
    .put(function(req, res){
      // can use similar fn in patch version,
      // just showing verbose version
      req.book.title = req.body.title;
      req.book.genre = req.body.genre;
      req.book.author = req.body.author;
      req.book.read = req.body.read;

      req.book.save(function(err){
        if(err){
          res.status(500).send(err);
        } else {
          res.json(req.book);
        }
      });
    })
    .patch(function(req, res){

      if(req.body._id){
        delete req.body._id;
      }

      for(var p in req.body){
        req.book[p] = req.body[p];
      }

      req.book.save(function(err){
        if(err){
          res.status(500).send(err);
        } else {
          res.json(req.book);
        }
      });

    })
    .delete(function(req,res){
      req.book.remove(function(err){
        if(err){
          res.status(500).send(err);
        } else {
          res.status(204).send('book removed');
        }
      });
    }
  );
  return apiRouter; // ! make sure something is returned or else undefined
};

module.exports = route;
