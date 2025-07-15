module.exports = function (app) {
    app.get("/noticias", function (req, res) {
        app.app.controllers.ct_noticias.noticias(app, req, res);
    });

    app.get("/noticia/:id_noticia", function (req, res) {
        app.app.controllers.ct_noticias.noticia(app, req, res);
    });

    app.post("/noticia/salvar", function (req, res) {
        app.app.controllers.ct_noticias.noticiaSalvar(app, req, res);
    });

    app.get("/noticias/ultimas5", function (req, res) {
        app.app.controllers.ct_noticias.noticiasUltimas5(app, req, res);
    });
};
