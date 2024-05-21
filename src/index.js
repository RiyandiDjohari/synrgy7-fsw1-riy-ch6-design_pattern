require('dotenv').config();
const knexConfig = require('../knexfile');
const express = require("express");
const knex = require("knex");
const app = express();
const path = require("path");
const router = require("./routes");
const {Model} = require ("objection");
const port = process.env.PORT || 8000;
const publicDir = path.join(__dirname, "../public");
const viewsDir = path.join(__dirname, "/views");

app.use(express.urlencoded({extended: false}));
app.locals.baseURL = `${process.env.BASE_URL}:${port}`;

// Koneksi Express & Knex
const knexInstance = knex(knexConfig['development']);
Model.knex(knexInstance);

/** Install JSON request parser */
app.use(express.json());

/** Install View Engine */
app.set("views", viewsDir);
app.set("view engine", "ejs");

/** Set Public Directory */
app.use(express.static(publicDir));

/** Install Router */
app.use(router);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})

module.exports = app;
