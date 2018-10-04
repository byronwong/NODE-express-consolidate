const path = require('path');
const express = require('express');
const Chalk = require('chalk');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;
const app = express();

const shopRouter = require('./routes/shopRouter');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('src')); // NOTE: serving out of source for now

// create a api router
mongoose.connect('mongodb://localhost/booksAPI');
let Book = require('./models/bookModel');
const apiRouter = require('./routes/apiRouter')(Book); // its a function so we need to invoke it

// Create a book router
let bookRouter = express.Router();

bookRouter.route('/')
.get(function(req, res){
  res.send('Hello books...');
});

bookRouter.route('/single')
.get(function(req, res){
  res.send('Hello Single book...');
});

bookRouter.route('/single/:message')
.get(function(req, res){
  res.send(`Hello Single book (${req.params.message}) ...`);
});


// middleware - for requests with /books use the bookRouter
app.use('/books', bookRouter);
app.use('/shop', shopRouter); // can only be used with ES6 modules
app.use('/api', apiRouter);

// catch all routes
app.get('/', function(req, res){
  res.sendFile('index.html', {root: path.resolve(__dirname, 'src')});
});

app.listen(port, function(err){
  console.log(Chalk.blue('Server created on port: ') + Chalk.red(port));
});
