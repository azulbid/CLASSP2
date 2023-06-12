var express = require('express');
var router = express.Router();
let registerController = require('../controllers/registerController')


router.post('/', registerController.store); //Guarda al usuario en la base de datos.
router.get('/', registerController.register);
module.exports = router;