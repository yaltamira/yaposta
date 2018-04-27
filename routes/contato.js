module.exports = function(app){
    var contato = app.controllers.ContatoController;
    //console.log(app.controller);
    app.get('/contato', contato.index);

    app.get('/contato/:id', contato.show);
/*
    app.post('/contato', contato.create);
    app.get('/contato/:id/editar', contato.edit);
    app.put('/contato/:id', contato.update);
    app.del('/contato/:id', contato.destroy);
*/
}