This project is using: 2018-starter

## Notes are stored in notes folder
Notes for this course are in the notes folder.


## Global requirements
To package this (deleting node modules) you can use `npm run package`
- `del-cli` - `npm install --global del-cli`


## Getting started
- `npm i`
- `npm start` - NOTE: we are using `nodemon` to reset the serve on change.
- `npm-run-all --parallel task1 task2` - runs tasks in parallel
- `-s ` - run in silent mode

NOTES:
- babel has been installed to allow the use of ES6 modules, you can now import modules
- I have also implemented react in a temporary capacity in the index.html file to provide basic templates.


## Babel 
[Docs](https://babeljs.io/docs/en/babel-cli)
- `npx babel --version` - to check babel is correctly installed
- `npm babel-node` - to run babel on our build scripts including app.js

- due to incompatibility with nodemon I have stopped using ES6 babel and return to using require.

```js 
  var express = require('express');
  var bookRouter = express.Router();

  module.exports = router;
```

## Basic React implementation 
I have add basic react, see html and [these docs](https://reactjs.org/docs/add-react-to-a-website.html)

## Routes
GET - using query
http://localhost:8000/api?_id=<someid>

GET, POST
http://localhost:8000/api
use postman to do a POST request
