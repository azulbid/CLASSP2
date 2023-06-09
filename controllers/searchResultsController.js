let db = require('../database/models')
let op = db.Sequelize.Op;
let searchResultsController = {
    showRes: function (req, res) {
        let buscado = req.query.search
        let elembusc = {
            where: [{ nombreproducto: { [op.like]: `%${buscado}%` } }] || [{ descripcionproducto: {[op.like]: `%${buscado}%`}}],
            order: [['createdAt', 'ASC']],
            include: [{ association: 'comentarios' }, { association: 'usuario' }]
        }

      //  let elembusc2 = {
        //    where:[{ descripcionproducto: {[op.like]: `%${buscado}%`}}],
          //  order:[['createdAt', 'ASC']],
            //include:[{ association: 'comentario' }, { association: 'usuario' }],
//        }

    
    db.Products.findAll(elembusc)
        .then(function (result) { 
        //   return res.send(result)
    
            if (result.length > 0){
                return res.render('search-results', { lista: result })
            }else{
                let errors = {};
                errors.message = "No se han encontrado resultados de su búsqueda"
                res.locals.errors = errors;
                return res.render('search-results', { lista: undefined })
            }

        //        db.Product.findAll(elembusc2)
          //      .then(function(result2){
            //        if(result2.length != 0){
              //          res.render('searchResults',)
        
               // })
           // }
    })
        .catch (function(error) {
        console.log(error)
    })
    
}}

module.exports = searchResultsController