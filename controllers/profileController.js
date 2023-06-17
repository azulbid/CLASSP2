//PERFIL
let db = require("../database/models");
let op = db.Sequelize.Op; 
let profileController = { 
    det: function(req,res){
        let idUsuario = ''
          if (req.session.user != undefined){
               idUsuario = req.session.user.id
          }
        let username = req.params.username;
            db.User.findOne({
                where: [{username:username}],
                include: [{ association: 'productos' }]
                
            }).then(function(oneUser){
                //return res.send(oneUser)
                return res.render('profile', {
                    datosUsuario: oneUser,
                    idUsuario : idUsuario
                }) 

            })
        
            
    },


 


    

        // .catch(function(e){
        //     console.log(e);
        // },

}


module.exports = profileController