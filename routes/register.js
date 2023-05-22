var express = require('express');
var router = express.Router();
let registerController = require('../controllers/registerController')


router.get('/register',indexController.register); //Mostrar el form de registro.
router.post('/register', indexController.store); //Guarda al usuario en la base de datos.

router.get('/', registerController.register);
module.exports = router;