function NoticiasDAO(connection) {
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function (callback) {
    this._connection.query("SELECT * FROM noticias", callback);
};

NoticiasDAO.prototype.getNoticia = function (id_noticia, callback) {
    this._connection.query(
        "SELECT * FROM noticias WHERE id_noticia = ? ",
        [id_noticia],
        callback
    );
};

NoticiasDAO.prototype.setNoticiaSalvar = function (noticia, callback) {
    this._connection.query("INSERT INTO noticias SET ?", noticia, callback);
};

module.exports = function () {
    return NoticiasDAO;
};
