//PRODUCTO 

let db = require('../database/models');
let productsController = {
     show: function(req,res){ 
          let id = req.params.id;
          db.Products.findOne({
              where: [{id:id}],
              include: [{ association: 'comentarios' }, {association : "usuario"}]
              
          }).then(function(product){
          
          
          //show: metodo      render se ejecuta en el response
         return res.render('product' ,{ 
          
          //product es en donde quiero renderizar (en que vista)      render es un metodo
          //dos argumentos que se le pasa a la vista
         datosproducto: product
         })
     })
      },

      add: function(req,res){
          if (req.session.user && req.session.user.id) {
              // return res.send(String(req.session.user.id));
            // } else {
             //  return res.send("User id is not defined");
             }
             
          //return res.send(String(req.session.user.id))
          return res.render('product-add')
      },

     submit: function(req,res){
       //   let form = req.params;
          let product = {
          
               id_usuario: String(req.session.user.id),
               nombreproducto: req.body.nombreproducto,
               descripcionproducto: req.body.descripcionproducto,
           //    detalle: form.detalle
          }
           //return res.send(product)
          db.Products.create(product)
           .then(function(productoCreado){
                return res.redirect('/');
           })
           .catch(function(error){
                console.log(error);
                return res.render('product-add',{mensaje: 'Error' });
           })
     }}



module.exports = productsController