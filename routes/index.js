//MAIN
var express = require('express');
var router = express.Router();
//let indexController = require('../controllers/indexController')
//router.get('/', indexController.index);

const productsController = require('../controllers/productsController')

router.get('/', productsController.index);
router.get('/registro', productsController.show);

module.exports = router;
