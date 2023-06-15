//PERFIL
let db = require("../database/models");
let op = db.Sequelize.Op; //no lo estamos usando
let profileEditController = { 
  
    
    edit: function(req,res){
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
    modify: function(req, res){
        let form = req.body
        db.User.update({
            nombre: form.nombreproducto,
            email: form.email,
            dni: form.dni
            //agregar foto perfil
        }, {where: {
            id: form.id
        }})
        let errors = {}
        errors.message = "Volvé a ingresar sesión"
        return res.redirect('/login/logout')
        }
 }


module.exports = profileEditController