let db = require('../db/index')
let searchResultsController = {
    showRes: function(req,res){
        res.render('search-results', {lista:db.lista});
    }
}
module.exports = searchResultsController