//PRODUCTO 

let db = require('../database/models');
let productsController = {
         
     show: function(req,res){ 
          let id = req.params.id;
          db.Products.findOne({
              where: [{id:id}],
              include: [{ association: 'comentarios' }, {association : "usuario"}]
              
          }).then(function(product){
          
          
          //show: metodo      render se ejecuta en el response
         return res.render('product' ,{ 
          
          //product es en donde quiero renderizar (en que vista)      render es un metodo
          //dos argumentos que se le pasa a la vista
         datosproducto: product
         })
     })
      },

     add: function(req,res){
          let form = req.params;
          let userid = req.User.userid

          models.Products.create({
               id_usuario: req.session.user.id,
               nombreproducto: form.nombreproducto,
               descripcionproducto: form.descripcionproducto,
               detalle: form.detalle
          })
          .then(function(producto){
               return res.redirect('/', 'Producto añadido');
          })
          .catch(function(error){
               console.log(error);
               return res.render('product-add',{ datosUsuario: products.usuario});
          })
          
     }}

module.exports = productsController