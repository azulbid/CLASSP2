//PERFIL
let db = require("../database/models");
let op = db.Sequelize.Op; //no lo estamos usando
let bcryptjs = require('bcryptjs');

let profileEditController = { 
  
    
    edit: function(req,res){
        if (req.session.user == undefined){
            return res.redirect('/users/login')
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
            username: form.username,
            email: form.email,
            dni: form.dni ,
            contrasena: bcryptjs.hashSync(form.contrasena, 10),

            //agregar foto perfil
        }, {where: {
            id: req.session.user.id
        }})
        let errors = {}
        errors.message = "Volvé a ingresar sesión"
        req.session.destroy()
        res.clearCookie('Galleta')
        return res.redirect('/users/login')
        }
 }


module.exports = profileEditController