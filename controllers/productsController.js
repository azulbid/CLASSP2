//PRODUCTO 

let products = require('../db/index');
let usu = require('../db/usuario')
let productsController = {
         
     show: function(req,res){      //show: metodo      render se ejecuta en el response
         return res.render('product' ,{  //product es en donde quiero renderizar (en que vista)      render es un metodo
         comentarios : products.comentarios, //dos argumentos que se le pasa a la vista
         lista: products.lista
         })
      },

     add: function(req,res){
          return res.render('product-add',{ datosUsuario: products.usuario,
            usuario: usu.nombreUsuario
     })
    
  

}}

module.exports = productsController