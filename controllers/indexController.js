// MAIN 

let db = require('../database/models')

let indexController = {
    index: function (req, res) {
        db.Products.findAll({include: [ { association: 'usuario' }]})
        //cuando usamos findAll ponemos dentro del metodo un objeto literal el cual le ponemos la propiedad include, que dentro tiene un array con una associacion (association)
          //association: usuario estamos incluyendo la asociacion que definimos antes en el modelo
          .then(function (result) {
                          //retorna en la vista index la variable lista y lista2
              return res.render('index', { lista: result , lista2: result})
            } //renderizamos en la vista index; lista y lista2 tienen como valor lo que recibe la funcion
            //la funcion result recibe lo que viene del findAll 
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

