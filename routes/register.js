var express = require('express');
var router = express.Router();
let registerController = require('../controllers/registerController')

<<<<<<< HEAD

router.get('/register',indexController.register); //Mostrar el form de registro.
router.post('/register', indexController.store); //Guarda al usuario en la base de datos.

router.get('/', registerController.register);
=======
router.get('/', registerController.register); //     /../controllers/registerController
>>>>>>> fa8ba6b263a7d028776217c13cab9e803a454050
module.exports = router;