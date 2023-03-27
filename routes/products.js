let express = require('express');
let router = express.Router();
let productsController = require('../controllers/productsController')

//rutas de productos
router.get('/', productsController.index);
router.get('/detalle/id/:id', productsController.show)
router.get('/bio/id/:id/:ok?', productsController.detail)



module.exports = router;