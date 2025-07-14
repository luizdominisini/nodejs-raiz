const mysql = require("mysql2");

const connMysql = function () {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "portal_noticias",
        port: 3307,
    });
};

module.exports = function () {
    return connMysql;
};
