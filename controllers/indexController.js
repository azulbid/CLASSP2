// MAIN

let db = require('../db/index.js')
let db2 = require('../db/index2.js')

let indexController = {
    index: function(req,res){
        res.render('index',{
            lista: db.products,
          //  mascomentadas: db.masco,
          //  comentarios: db.comments,
        })
    },
    index2: function(req,res){
        res.render('index2',{
            comment: db2.masco,
        })
    }
}

// agregar mascomentados