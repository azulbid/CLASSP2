//PRODUCTO 

let db = require('../database/models');
let productsController = {
     show: function (req, res) {

          let idUsuario = ''
          //req.session: req es el pedido al navegador; session es una variable que nos permite guardar y compartir informacion del usuario entre las vistas
          // la info del usuario la guardamos del lado del servidor
          //es el identificador unico que asocia la informacion con ese usuario lo guardaremos del lado del cliente en el navegador


          //user es el usuario que esta usando la plataforma
          if (req.session.user != undefined){
               idUsuario = req.session.user.id
          }

          //req.params sirve para representar lo que hayamos puesto en la barra de navegacion
          
          let id = req.params.id;
          db.Products.findOne({
               where: [{ id: id }],
               include: [
                    { association: 'comentarios', include: [{ association: 'usuario' }] },
                    { association: 'usuario' }
               ]
          })

          //where: es para filtrar info; aca le pasamos atributos en un array, son los finds
          //obj literal
          //clave: nombre de la columna 
          //valor: valor a buscar 

          //findOne trae el primero que encuentra, busca un registro que coincida con criterio de busqueda o filtrado 

          //include: recibe objeto literal con el nombre de la asociacion en la vista

          //association: asociaciones que recibe funcion con los modelos y definimos ahi adentro las relaciones

               .then(function (product) {


                    //show: metodo      render se ejecuta en el response

                    return res.render('product', {

                         idUsuario : idUsuario,
                         datosproducto: product
                    })
               })
     },

     add: function (req, res) {
          if (req.session.user && req.session.user.id) {
               // return res.send(String(req.session.user.id));
               // } else {
               //  return res.send("User id is not defined");
               //req.session: al momento de querer definir y almacenar info 
               
          }

          //return res.send(String(req.session.user.id))
          return res.render('product-add')
     },

     submit: function (req, res) {
          //   let form = req.params;
          let product = {

               id_usuario: String(req.session.user.id),
               nombreproducto: req.body.nombreproducto,
               descripcionproducto: req.body.descripcionproducto,
               imagenes: req.body.imagenes
               //    detalle: form.detalle
          }
          //return res.send(product)
          //body es una propiedad de req
          //tiene toda la informacion que envia el usuario; la usamos en post (no en get)
          //del body que viaja en el request se obtiene la info que viaja desde el formulario

          db.Products.create(product)
               .then(function (productoCreado) {
                    return res.redirect('/');
               })

          //redirect: es un metodo que redirecciona a otra ruta de tipo get; en este caso redirecciona al index
               .catch(function (error) {
                    console.log(error);
                    return res.render('product-add');
               })
     },
     comment: function (req, res) {


          let comentario = {
               id_post: req.params.id,
               id_usuario: String(req.session.user.id),
               texto_comentario: req.body.comentario
          }
               

          db.Comments.create(comentario)
          return res.redirect("/products/detalle/id/" + req.params.id)

     },
     modify: function (req, res) {
     
              
                    return res.render('product-edit', { random: req.params.id })
                         .catch(function (error) {
                              console.log(error);
                              return res.render('product-edit');
                         })
},


     modificado: function (req, res){
          let form = req.body
          let updates = {}; //updates es un objeto literal que se le van agregando fotos
  
      if (form.imagenes) {
    updates.imagenes = form.imagenes;
      }
      //si el form tiene una imagen añadimos al objeto literal updates; si no tiene nada no se agrega nada, queda la de antes 
      if (form.nombreproducto) {
    updates.nombreproducto = form.nombreproducto;
      }
      if (form.descripcionproducto) {
    updates.descripcionproducto = form.descripcionproducto;
      };
      //los if son para agregar a updates


      //update sirve para actualizar los registros
          db.Products.update(updates,
           //update es un metodo que trae la orm; le pasamos updates (objeto que fue acumulando todas las actualizaciones, y el segundo es un obj lit where, especifica la condicion para la actualizacion)
        {where: {
              id: req.params.id
          },fields: Object.keys(updates)
      })
      //el where tiene adentro la columna y lo que queremos buscar/comparar columna y valor a buscar
      //el valor de where es otro objeto que tiene como clave la columna (registro) y req.params.id es el valor a buscar (como tiene que ser ese campo)
      //req.params aparece en la url 

      //fields son los campos en los que hacemos el update; es una propiedad que se utiliza en el metodo update para especificar los campos a actualizar en la db
      //updates es un objeto vacio que luego se llena con un form
      //object.keys actualizacion en la db
      .then(() => {
          return res.redirect('/');
        })
     
          },
     
     delete: function (req, res){
               let id = req.params.id;
             
               db.Comments.destroy({
                    where: { id_post: id }
                  })
                  .then(() => {
                    return db.Products.destroy({
                      where: { id: id }
                    });
                  })
                  .then(() => {
                    return res.redirect('/');
                  })
               .catch(function (error) {
                    console.log(error);
                    return res.redirect('/');
               })
             },
             
   }


module.exports = productsController