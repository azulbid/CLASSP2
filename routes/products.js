let express = require('express'); //requerimos express

let router = express.Router(); //guarda la ejecucion del metodo router de express (permite crear rutas muntables y desmuntables para modularizar el sistema de ruteo)
let productsController = require('../controllers/productsController')

//rutas de productos

router.get('/detalle/id/:id', productsController.show); //-->rutas PARAMETRIZADAS y generica (dinamicas, dependiendo de 
//lo que se escribe en la ruta real, la logica del response actuar diferente, permite tener una ruta para el detalle de cualquiera de nuestros productos) ≠ rutas estaticas
router.get('/add', productsController.add);
router.post("/add", productsController.submit)

module.exports = router; 