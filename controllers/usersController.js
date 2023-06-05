// LOG IN
let db = require("../database/models");
let op = db.Sequelize.Op;
let bcriptjs = require('bcryptjs');

let usersController = {
    users: function(req,res){
        if(req.session.user != undefined) {
            return res.redirect("/")
        }
        else {
        res.render('login')};

    },
    process: function(req,res){

        db.User.findOne({

            where : [{email:req.body.email}]
        })
        .then(function(usuarioEncontrado){
            let errores = {}

            if (usuarioEncontrado == null){
                errores.message = "El email no fue escrito correctamente o no está registrado en Lorniaz"
                res.locals.errors = errores;
                return res.render('login');
            } else {
            let comparacion = bcryptjs.compareSync(req.body.password, usuarioEncontrado.password)

            if(comparacion){
                req.session.user = {
                    email: usuarioEncontrado.email,
                    username: usuarioEncontrado.user,
                    } 
                    if(req.body.recordarme != undefined){
                        res.cookie('cookieEspecial', 'dato a guardar', {maxAge: 1000 * 912912912912912912})
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
        return res.redirect('/');
    }
}

module.exports = usersController