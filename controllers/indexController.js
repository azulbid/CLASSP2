// MAIN

let db = require('../db/index.js')
//let db2 = require('../db/index2.js')

let indexController = {
    index: function(req,res){
        res.render('index',{ 
            lista: db.lista, comment: db.comment
        })
    },
    }

module.exports = indexController


// agregar mascomentados