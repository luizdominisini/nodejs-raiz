const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

consign()
    .include("app/routes")
    .then("config/db_connection.js")
    .then("app/models")
    .then("app/controllers")
    .into(app);

module.exports = app;
