//PRODUCTO 

let products = require('../db/index');

let productsController = {
    index: function(req,res){ 
          return res.render('',{
            lista: products.lista
          })
      
        },
  
     show: function(req,res){
         return res.render('product') 
      },

     add: function(req,res){
          return res.render('product-add',{
          
     })
    
  
//     detail: function(req,res){
//         return res.render('product')
//     }
}}

module.exports = productsController