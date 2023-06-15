// MAIN 

let db = require('../database/models')

let indexController = {
    index: function (req, res) {
        
        db.Products.findAll({include: [ { association: 'usuario' }]})
          .then(function (result) {
            
              return res.render('index', { lista: result , lista2: result})
            }
          )
          .catch(function (error) {
            console.log(error)
          })
          },
    }

module.exports = indexController
// esta sección de código define el controlador que se encargará de renderizar la vista para la ruta raíz ("/") de la aplicación.

//  index: function(req,res){
//         db.Products.findAll({
//             include: [
//                 {association: "usuario"}, {association: 'comentarios'}
//             ],
//         },{order: [
//                     ['createdAt', 'DESC']]}).then(function(result){
//                         return res.render('index', {
//                             lista: data.lista, comment: data.comment, usuario: data.usuario
//                         }
//                     )})
//                     .catch(function(error){
//                         console.log(error)
//                     })
        
//     }}

