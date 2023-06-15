var express = require('express')
let profileController = require('../controllers/profileController');
let profileEditController = require('../controllers/profileEditController')
var router = express.Router(); 

router.get('/:username', profileController.det);

router.get('/editar', profileEditController.edit);
router.post('/editar', profileController.modify);



module.exports = router; 