var express = require('express')
let profileEditController = require('../controllers/profileEditController')
var router = express.Router(); 

router.get('/', profileEditController.edit);




module.exports = router; 