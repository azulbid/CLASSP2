//log in
var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController')

router.get('/login', usersController.loginForm);
router.post('/login', usersController.loginPost);
router.post('/logout', usersController.logout)

module.exports = router;
