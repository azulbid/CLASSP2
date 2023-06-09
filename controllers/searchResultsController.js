//SEGUIR CON SEARCHRESULTS


let db = require('../database/models')
let op = db.Sequelize.Op;
let searchResultsController = {
    showRes: function (req, res) {
        let buscado = req.query.search
        let elembusc = {
            where: [{ nombre_producto: { [op.like]: `%${buscado}%` } }],
            order: [['createdAt', 'ASC']],
            include: [{ association: 'comentario' }, { association: 'usuario' }]
        }

    
    db.Producto.findAll(elembusc)
   
        .then(function (result) { 
            let error = {}
            if (result.lenght = ! 0)
            res.render('search-results', { lista: result })
    })
    .catch ( function(error) {
    console.log(error)
})
    
}}

module.exports = searchResultsController