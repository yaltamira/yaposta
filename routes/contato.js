module.exports = function(app){
    var contato = app.controllers.ContatoController,
        autenticar = require('./../middleware/autenticador');
    //console.log(app.controller);
    app.get('/contato', autenticar, contato.index);

    app.get('/contato/:id', autenticar, contato.show);
    app.post('/contato', contato.create);
    app.get('/contato/:id/editar', contato.edit);
    app.put('/contato/:id', contato.update);
    app.delete('/contato/:id', contato.destroy);

}