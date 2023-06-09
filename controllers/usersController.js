// LOG IN
let db = require("../database/models");
let op = db.Sequelize.Op; //no lo estamos usando 
let bcryptjs = require('bcryptjs');

let usersController = {
    loginForm: function(req,res){
        if(req.session.user != undefined) {
            return res.redirect("/")
        }
        else {
        return res.render('login')};

    },


    loginPost: function(req,res){

        db.User.findOne({

            where : [{email:req.body.email}]
        })
        .then(function(usuarioEncontrado){
            let errores = {}

            if (usuarioEncontrado == null){
                errores.message = "El email no fue escrito correctamente o no está registrado en Loniaz"
                res.locals.errors = errores;
                return res.render('login');
            } else {
            let comparacion = bcryptjs.compareSync(req.body.contrasena, usuarioEncontrado.contrasena)

            if(comparacion){
                req.session.user = {
                    email: usuarioEncontrado.email,
                    dni: usuarioEncontrado.dni,
                    username: usuarioEncontrado.username
                    } 
                    if(req.body.checkbox != undefined){
                        res.cookie('Galleta', req.session.user, {maxAge: 1000 * 912912912912912912})
                    }
                
            
            return res.redirect("/");
        } else {
errores.message = "La contraseña es incorrecta.";
                    res.locals.errors = errores;
                    return res.render("login");
                }
            }           

           })
           .catch(function(e){
            console.log(e);
           }) 


        },
        
        

    logout: function(req, res){
        req.session.destroy()
      //  res.clearCookie('Galleta')
        return res.redirect('/');
    }
}

module.exports = usersController