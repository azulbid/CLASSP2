//PRODUCTO 

let products = require('../db/index');

let productsController = {
    index: function(req,res){ 
          return res.render('index',{
            lista: products.lista
          })
      
        },
  
     show: function(req,res){
         return res.send('Detalle de una obra') 
      },

     add: function(req,res){
          return res.render('product-add',{
          datosUsuario: db.usuario
     })
    
  
//     detail: function(req,res){
//         return res.render('product')
//     }
}}

module.exports = productsController