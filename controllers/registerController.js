//REGISTRO
let db = require('../database/models')
let bcryptjs = require('bcryptjs');

let registerController = {
    register: function(req, res){
        res.render('register');
    },


register: function(req, res){
    return res.render('register');
},
store: function(req, res){
    let errors = {};
    if (req.body.mail == "") {
        errors.message = "El mail está vacío";
        res.locals.errors = errors;
        return res.render('register')
    } else if (req.body.password == ""){
        errors.message = "La clave está vacía"
        res.locals.errors = errors;
        return res.render('register');
    } else {    
        let form = req.body

        //Encriptar la contraseña antes de guardar en la base de datos.
        let user = {
            email:form.email,
            name: form.username,
            password: bcryptjs.hashSync(form.password, 10),
            remember_token: null
        }
        //return res.send(user);
        //Usar un método de Sequelize para guardar datos.
        db.User.create(user) //Pasar un objeto literal con los datos a guardar.
            .then(function(usuarioCreado){ //retorna el elemento creado
                //Dentro del then debería redireccionar a otra ruta.
                return res.redirect('/users');
            })
            .catch(function(e){
                console.log(e);
            });
    
    
    
    }}
    };
 

module.exports = registerController;