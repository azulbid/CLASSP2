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
        let updates = {};

    if (form.username) {
  updates.username = form.username;
    }
    if (form.email) {
  updates.email = form.email;
    }
    if (form.dni) {
  updates.dni = form.dni;
    }
    if (form.contrasena) {
  updates.contrasena = bcryptjs.hashSync(form.contrasena, 10);
    }
    //HASHING de manera sincronica; es para encriptar la contraseña
    if (form.fotodeperfil) {
        updates.fotodeperfil = form.fotodeperfil };

        db.User.update(updates,
         

            //agregar foto perfil
    {where: {
            id: req.session.user.id
        },fields: Object.keys(updates)
        //object.keys es una funcion (nativa) de js que devuelve un array con las claves de un objeto
        //updates en este caso para obtener un array con las claves del objeto updates
    })
        
        req.session.destroy()
        res.clearCookie('Galleta') //Galleta es el nombre de nuestra cookie, la definimos en app
        //req.cookies 
        
        return res.redirect('/users/login')
        }
 }


module.exports = profileEditController