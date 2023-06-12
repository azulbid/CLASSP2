//PERFIL
let db = require("../database/models");
let op = db.Sequelize.Op; //no lo estamos usando
let profileController = { 
    det: function(req,res){
        let username = req.params.username;
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
    edit: function(req,res){
        return res.render('profile-edit', {
            datosUsuario: db.User, lista: db.Product, comentarios: db.Comment,
        })
    },


}

module.exports = profileController