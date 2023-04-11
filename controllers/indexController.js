// MAIN

let db = require('../db/index.js')

let indexController = {
    index: function(req,res){
        res.render('index',{
            lista: db.lista
        })
    }
}

// agregar mascomentados