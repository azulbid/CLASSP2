var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController')


router.get('/', productsController.index);


router.get('/registro', productsController.show);

module.exports = router;