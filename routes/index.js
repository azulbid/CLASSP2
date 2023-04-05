var express = require('express');
var router = express.Router();
//var registro = express.Registro()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;

router.get('/registro', function (req, res)  {
  res.render('register');
});
//module.exports = registro; 
