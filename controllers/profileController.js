//PERFIL
let db = require('../db/index');
let usu = require('../db/usuario')
let profileController = {
    det: function(req,res){
        return res.render('profile', {
            datosUsuario: db.usuario, lista: db.lista, comentarios: db.comentarios,
             usuario: usu.nombreUsuario
        })
    },
    edit: function(req,res){
        return res.render('profile-edit', {
            datosUsuario: db.usuario
        })
    },


   // profile: function(req,res){
     //   return res.render('profile', {nombre: usu[0].nombre, email: usu[0].email, dni:usu[0].dni, cumple: usu[0].fechaNac, clave:db[0].clave })
    //}

}

module.exports = profileController