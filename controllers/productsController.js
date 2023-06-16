//PRODUCTO 

let db = require('../database/models');
let productsController = {
     show: function (req, res) {
          let id = req.params.id;
          db.Products.findOne({
               where: [{ id: id }],
               include: [
                    { association: 'comentarios', include: [{ association: 'usuario' }] },
                    { association: 'usuario' }
               ]
          })
               .then(function (product) {


                    //show: metodo      render se ejecuta en el response

                    return res.render('product', {

                         //product es en donde quiero renderizar (en que vista)      render es un metodo
                         //dos argumentos que se le pasa a la vista
                         datosproducto: product
                    })
               })
     },

     add: function (req, res) {
          if (req.session.user && req.session.user.id) {
               // return res.send(String(req.session.user.id));
               // } else {
               //  return res.send("User id is not defined");
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
          db.Products.create(product)
               .then(function (productoCreado) {
                    return res.redirect('/');
               })
               .catch(function (error) {
                    console.log(error);
                    return res.render('product-add', { mensaje: 'Error' });
               })
     },
     comment: function (req, res) {


          let comentario = {
               id_post: req.params.id,
               id_usuario: String(req.session.user.id),
               texto_comentario: req.body.comentario
          }
               .catch(function (error) {
                    console.log(error);
                    return res.render('product-add', { mensaje: 'Error' });
               })

          db.Comments.create(comentario)
          return res.redirect("/products/detalle/id/" + req.params.id)



     },
     modify: function (req, res) {
      
              
                    return res.render('product-edit', { mensaje: 'Error' })
                         .catch(function (error) {
                              console.log(error);
                              return res.render('product-edit', { mensaje: 'Error' });
                         })
},


     modificado: function (req, res){
          let form = req.body
          let updates = {};
  
      if (form.imagenes) {
    updates.imagenes = form.imagenes;
      }
      if (form.nombreproducto) {
    updates.nombreproducto = form.nombreproducto;
      }
      if (form.descripcionproducto) {
    updates.descripcionproducto = form.descripcionproducto;
      };
          db.Products.update(updates,
           
  
              //agregar foto perfil
      {where: {
              id: req.params.edit
          },fields: Object.keys(updates)
      })
          return res.redirect('/')
          }
   }


module.exports = productsController