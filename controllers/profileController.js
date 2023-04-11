//PERFIL
let db = require('../db/index');
let profileController = {
    det: function(req,res){
        return res.render('profile', {
            datosUsuario: db.usuario 
        })
    },
    edit: function(req,res){
        return res.render('profile-edit', {
            datosUsuario: db.usuario
        })
    }

}

module.exports = profileController