const Joi = require("joi");

const noticiaSchema = Joi.object({
    titulo: Joi.string().min(3).max(100).required(),
    noticia: Joi.string().required(),
    resumo: Joi.string().required(),
    autor: Joi.string().min(3).max(50).required(),
    data_noticia: Joi.date().required(),
});

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
    const { error, value } = noticiaSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    const connection = app.config.db_connection();
    const noticiasDAO = new app.app.models.noticias_dao(connection);

    noticiasDAO.setNoticiaSalvar(value, function (error, result) {
        if (error) {
            return res.status(500).json({ error: "Failed to save news" });
        }

        res.status(200).json({ message: "News saved successfully", result });
    });
};
