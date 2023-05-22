//REGISTRO
let db = require('../database/models')

let registerController = {
    register: function(req, res){
        res.render('register');
    },


register: function(req, res){
    return res.render('register');
},
store: function(req, res){
    let form = req.body

    //Encriptar la contraseña antes de guardar en la base de datos.
    let user = {
        email:form.email,
        name: form.username,
        password: form.password,
    }

    //Usar un método de Sequelize para guardar datos.
    db.User.create(user) //Pasar un objeto literal con los datos a guardar.
        .then(function(usuarioCreado){ //retorna el elemento creado
            //Dentro del then debería redireccionar a otra ruta.
            console.log(usuarioCreado);
                // return res.send(form);
            return res.redirect('/');
        })
        .catch(function(e){
            console.log(e);
        })



}}

module.exports = registerController;