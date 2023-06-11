var express = require('express')
let profileController = require('../controllers/profileController');
var router = express.Router(); 

router.get('/:username', profileController.det);
router.get('/editar', profileController.edit);


module.exports = router; 