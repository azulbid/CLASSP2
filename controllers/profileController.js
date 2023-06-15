//PERFIL
let db = require("../database/models");
let op = db.Sequelize.Op; 
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


 


    

        // .catch(function(e){
        //     console.log(e);
        // },

}


module.exports = profileController