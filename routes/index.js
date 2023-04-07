/*var express = require('express');
var router = express.Router();
//var registro = express.Registro()

 GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
module.exports = router;

router.get('/registro', function (req, res)  {
  res.render('register');
});
//module.exports = registro; 
*/

var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController')


router.get('/', productsController.index);


router.get('/registro', productsController.show);

module.exports = router;