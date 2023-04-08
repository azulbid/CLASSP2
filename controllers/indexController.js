// MAIN
let db = require('../db/index.js')
let indexController = {
    index: function(req,res){
        res.render('home',{
            lista: db.products
        })
    }
}