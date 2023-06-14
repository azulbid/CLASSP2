//PERFIL
let db = require("../database/models");
let op = db.Sequelize.Op; //no lo estamos usando
let profileController = { 
    det: function(req,res){
        let username = req.params.username;
            db.User.findOne({
                where: [{username:username}],
                include: [{ association: 'productos', order: [['createdAt', 'desc']] }]
                
            }).then(function(oneUser){
                //return res.send(oneUser)
                return res.render('profile', {
                    datosUsuario: oneUser,
                }) 

            })
        
    },
    edit: function(req,res){
        if (req.session-user == undefined){
            return res.redirect('/login')
        }else {
            let id = req.session.user.id
            db.User.findByPk(id)
            .then(function(resultado){
                return res.render('profile-edit', {
                    datosUsuario: db.User, lista: db.Product, comentarios: db.Comment,})
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


module.exports = profileController