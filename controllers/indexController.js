// MAIN

let db = require('../db/index.js')

let indexController = {
    index: function(req,res){
        res.render('index',{
            lista: db.products,
          //  mascomentadas: db.masco,
          //  comentarios: db.comments,
        })
    }
}

// agregar mascomentados