var express = require('express');
var router = express.Router();
let searchResultsController = require('../controllers/searchResultsController')

router.get('/', searchResultsController.showRes); //showres es el metodo que va a utilizar el controlador
module.exports = router;