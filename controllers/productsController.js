let db = require('../db/index');

let productsController = {
    index: function(req,res){ 
        // obtener el parametroo de la url
        let id = req.params.id
        //crear una variable para guardar la coincidencia dentro del for.
        let resultado = []
        

        //recorrer el aaray de datos y seleccionar el elemento que tenga id igual al par'ametro.
        for (let i=0; i<db.lista.length; i++){
      
            if (db.lista[i].id == id){
              resultado.push(db.lista[i])
            
            }
          }


      
          return res.render('index', {products: resultado})
      },
  
      show: function(req,res){
          return res.send('Detalle de una obra') 
      },
  
     // detail: function(req,res){
       //   return res.send('Bio del heroe'): cambiar bio del heroe por lo que querramos; ej. foto
     // }
}

module.exports = productsController