//PERFIL
let db = require("../database/models");
let op = db.Sequelize.Op; //no lo estamos usando
let profileController = { 
    det: function(req,res){
        return res.render('profile', {
            datosUsuario: db.User, lista: db.Product, comentarios: db.Comment,
            
        }) 
    },
    edit: function(req,res){
        return res.render('profile-edit', {
            datosUsuario: db.User, lista: db.Product, comentarios: db.Comment,
        })
    },


   // profile: function(req,res){
     //   return res.render('profile', {nombre: usu[0].nombre, email: usu[0].email, dni:usu[0].dni, cumple: usu[0].fechaNac, clave:db[0].clave })
    //}

}

module.exports = profileController