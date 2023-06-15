let db = require('../database/models')
let op = db.Sequelize.Op;
let searchResultsController = {
  showRes: function (req, res) {
    let buscado = req.query.search
    let elembusc = {
      where: {
        [op.or]: [
          { nombreproducto: { [op.like]: `%${buscado}%` } },
          { descripcionproducto: { [op.like]: `%${buscado}%` } }
        ]
      },
      order: [['createdAt', 'ASC']],
      include: [{ association: 'comentarios' }, { association: 'usuario' }]
    }

    db.Products.findAll(elembusc)
      .then(function (result) {
        if (result.length > 0) {
          //return res.send(result)
          return res.render('search-results', { lista: result })
        } else {
          let errors = {};
          errors.message = "No se han encontrado resultados de su búsqueda"
          res.locals.errors = errors;
          return res.render('search-results', { lista: undefined })
        }
      })
      .catch(function (error) {
        console.log(error)
      })
      },
//CAMBIAR PARAMETROS
  showResUsu: function (req, res) {
    let usubuscado = req.query.search
    let usubusc = {
      where: {
        [op.or]: [
          { username: { [op.like]: `%${usubuscado}%` } },
        ]
      },
      order: [['createdAt', 'DESC']],
    }


db.User.findAll(usubusc)
  .then(function (result) {
    //   return res.send(result)

    if (result.length > 0) {
      return res.render('user-results', { lista: result })
    } else {
      let errors = {};
      errors.message = "El usuario buscado no se encuentra registrado"
      res.locals.errors = errors;
      return res.render('user-results', { lista: undefined })
    }
  })


  .catch(function (error) {
    console.log(error)
  })
}}


module.exports = searchResultsController