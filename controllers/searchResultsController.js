let db = require('../db/index')
let searchResultsController = {
    showRes: function(req,res){
        res.render('search-results');
    }
}
module.exports = searchResultsController