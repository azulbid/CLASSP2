// LOG IN

let usersController = {
    users: function(req,res){
        if(req.session.user != undefined) {
            return res.redirect("/")
        }
        else {
        res.render('login')};

    },
    process: function(req,res){
        req.session.user = {
        email: "aledh@gmail.com",
        username: "Ale"
        } 
        if(req.body.recordarme != undefined){
            res.cookie('cookieEspecial', 'dato a guardar', {maxAge: 1000 * 912912912912912912})}
    return res.send(req.session)},

    logout: function(req, res){
        req.session.destroy()
        return res.redirect('/');
    }
}

module.exports = usersController