//MAIN
var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexController')
router.get('/', indexController.index);
//var registro = express.Registro()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;
