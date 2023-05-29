//log in
var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController')

router.get('/', usersController.users);
router.post('/logout', usersController.logout)

module.exports = router;
