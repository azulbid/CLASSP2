//PRODUCTO 

let products = require('../db/index');
let usu = require('../db/usuario')
let productsController = {
    index: function(req,res){ 
          return res.render('',{
            lista: products.lista   
          })
      
        },

        
     show: function(req,res){
         return res.render('product',{ 
         comentarios : products.comentarios,
         lista: products.lista
         })
      },

     add: function(req,res){
          return res.render('product-add',{ datosUsuario: products.usuario,
            usuario: usu.nombreUsuario
     })
    
  

}}

module.exports = productsController