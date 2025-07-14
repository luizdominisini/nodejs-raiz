module.exports.noticias = function (app, req, res) {
    const connection = app.config.db_connection();
    const noticiasDAO = new app.app.models.noticias_dao(connection);

    noticiasDAO.getNoticias(function (error, result) {
        if (error) {
            return res.status(500).json({ error: "Database query failed" });
        }

        res.status(200).json({ result });
    });
};

module.exports.noticia = function (app, req, res) {
    const connection = app.config.db_connection();
    const noticiasDAO = new app.app.models.noticias_dao(connection);

    noticiasDAO.getNoticia(req.params.id_noticia, function (error, result) {
        if (error) {
            return res.status(500).json({ error: "Database query failed" });
        }

        res.status(200).json({ result });
    });
};

module.exports.noticiaSalvar = function (app, req, res) {
    const connection = app.config.db_connection();
    const noticiasDAO = new app.app.models.noticias_dao(connection);

    noticiasDAO.setNoticiaSalvar(req.body, function (error, result) {
        if (error) {
            return res.status(500).json({ error: "Failed to save news" });
        }

        res.status(200).json({ message: "News saved successfully", result });
    });
};
