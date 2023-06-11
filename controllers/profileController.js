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
                //res.send(oneUser.productos[1].nombreproducto)
                return res.render('profile', {
                    datosUsuario: oneUser,
                    lista : oneUser.productos
                    
                }) 

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