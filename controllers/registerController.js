//REGISTRO
let db = require('../database/models')
let bcryptjs = require('bcryptjs');

let registerController = {
    register: function(req,res){
        if(req.session.user != undefined) {
            return res.redirect("/")
        }
        else {
        return res.render('register')};

    },

    store: function(req, res){
    let errors = {};
    if (req.body.email == "") {
        errors.message = "ESTE CAMPO SE ENCUENTRA VACÍO, POR FAVOR INGRESE UN MAIL VÁLIDO";
        res.locals.errors = errors;
        return res.render('register')
    } else { 
        db.User.findOne({ where: { email: req.body.email } })
    .then(function(user) {
      if (user) {
        errors.message = "El correo electrónico ya está registrado";
        res.locals.errors = errors;
        return res.render('register');
        
    } else if (req.body.contrasena== ""){
        errors.message = "La clave está vacía"
        res.locals.errors = errors;
        return res.render('register');
    
      } 
    else if (req.body.contrasena.lenght < 3){
            errors.message = "La clave debe ser mas larga"
            res.locals.errors = errors;
            return res.render('register');
    } else {    
        let form = req.body

        //Encriptar la contraseña antes de guardar en la base de datos.
        let user = {
            email:form.email,
            username: form.username,
            dni: form.dni,
            fecha: form.fecha,
            fotodeperfil: form.fotodeperfil ? form.fotodeperfil: 'https://clasicoshispanicos.com/wp-content/uploads/2021/01/siluetagrisanonimo.jpg',
            contrasena: bcryptjs.hashSync(form.contrasena, 10),
            remember_token: null
        }
        //return res.send(user);
        //Usar un método de Sequelize para guardar datos.
        db.User.create(user) //Pasar un objeto literal con los datos a guardar.
            .then(function(usuarioCreado){ //retorna el elemento creado
                //Dentro del then debería redireccionar a otra ruta.
                return res.redirect('/users/login');
            })
            .catch(function(e){
                console.log(e);
            });
        }
    })
    
    
    }}
    };
 

module.exports = registerController;