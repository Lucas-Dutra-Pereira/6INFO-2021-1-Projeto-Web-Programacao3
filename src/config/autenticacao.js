exports.autenticacao =  function autenticacao(){
    return function(req,res,next){
        if (req.isAuthenticated()){
            return next()
        }
        req.flash('msg',"Login necessário!");
        res.redirect("/admin");
    }
}