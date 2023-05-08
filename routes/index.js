//en los archivos de rutas se define una variable que hace referencia al controlador que requiere la informacion del archivo conveniente

var express = require('express'); //utilizamos el paquete de express
var router = express.Router(); //llamamos a la funcion lista para utilizar
let indexController = require('../controllers/indexController');

router.get('/', indexController.index); // '/' responde a la raiz del sitio web, hacemos de esta forma un listado de las rutas que sabe contestar nuestro sitio web
// el segundo parametro es la consecuencia de cuando ingresamos al primero

module.exports = router;