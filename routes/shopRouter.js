const express =  require('express');

let shopRouter = express.Router();

shopRouter.route('/')
.get(function(req, res){
  res.send('Hello shops...');
});

shopRouter.route('/single')
.get(function(req, res){
  res.send('Hello Single shop...');
});

// export default shopRouter;
module.exports = shopRouter;
