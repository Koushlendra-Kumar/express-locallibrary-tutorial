var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*GET Cool text (CHALLENGE)*/
router.get('/cool', (req, res, next) => {
  res.send('You are so cool');
});

module.exports = router;
