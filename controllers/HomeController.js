module.exports = function(app){
    var HomeController = {
        index: function(req, res){
            res.render('home/index');
        },
        login: function(req, res){

            var usuario = req.body;
            if(!usuario)
                res.redirect('/');
            
            var nome  = usuario.nome; 
            var email = usuario.email;
            
            if(email && nome){
                usuario.contatos = [];
                req.session.usuario = usuario;
                res.redirect('/contato');
            }else{
                res.redirect('/');
            }
        },
        logout: function(req, res){
            req.session.destroy();
            res.redirect('/');
        }
    };

    return HomeController;
}