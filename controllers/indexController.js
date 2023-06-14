// MAIN 

let db = require('../db/index.js') //importamos un modulo  llamado 'index.js' desde una ruta relativa '../db/' situandonos dentro del archivo haciendo uso de la funcion de node 'require
let data = require('../database/models')

let indexController = {
    index: function(req,res){
        res.render('index',{  //se renderiza index (views)
            lista: db.lista, comment: db.comment, usuario: db.usuario
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

