let express = require('express');
let router = express.Router();
let productsController = require('../controllers/productsController')

//rutas de productos
router.get('/', productsController.index);
router.get('/detalle/id/:id', productsController.detail);
router.get('/add', productsController.add)

module.exports = router;