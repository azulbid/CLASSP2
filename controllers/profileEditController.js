//PERFIL
let db = require("../database/models");
let op = db.Sequelize.Op; //no lo estamos usando
let profileEditController = { 
  
    
    edit: function(req,res){
       // return res.render('profile-edit')
        if (req.session.user == undefined){
            return res.redirect('/login')
        }else {
            let id = req.session.user.id
            db.User.findByPk(id)
            .then(function(resultado){
                //return res.send(res.locals.User)
        return res.render('profile-edit', {
                    datosUsuario: res.locals.User, lista: db.Product, comentarios: db.Comment,})
            })
        }
    },

 }


module.exports = profileEditController