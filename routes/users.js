//log in
var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController')

router.get('/', usersController.users);


module.exports = router;
