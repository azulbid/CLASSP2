let db = require('../db/index');

let productsController = {
    index: function(req,res){ 
          return res.render('index')
      },
  
      show: function(req,res){
          return res.send('Detalle de una obra') 
      },
  
     // detail: function(req,res){
       //   return res.send('Bio del heroe'): cambiar bio del heroe por lo que querramos; ej. foto
     // }
}

module.exports = productsController