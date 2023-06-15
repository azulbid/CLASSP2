//PERFIL
let db = require("../database/models");
let op = db.Sequelize.Op; //no lo estamos usando
let profileController = { 
    det: function(req,res){
        let username = req.session.user.username;
            db.User.findOne({
                where: [{username:username}],
                include: [{ association: 'productos' }]
                
            }).then(function(oneUser){
                //return res.send(oneUser)
                return res.render('profile', {
                    datosUsuario: oneUser,
                }) 

            })
        
            
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

        // .catch(function(e){
        //     console.log(e);
        // },

}


module.exports = profileController