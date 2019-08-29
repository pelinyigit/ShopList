const express = require('express');
const http = require("http");
const routes = require('./routes/index');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { body, validationResult } = require("express-validator");
require('dotenv').config();

const app = express();
try {

    // All environments
    // app.use(expressLayouts);
    app.set("views", __dirname + "/views");
    app.set("view engine", "ejs");

    app.use(bodyParser.json());
    app.use(cookieParser());
    app.use(express.static('public'));
    app.use(express.static(path.join(__dirname, "public")));
    app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
    app.use(bodyParser.urlencoded({ extended: true }));
    //app.use('/', routes);

    //routes
    //app.use('/registration', require('./routes/users'));

    app.get("/", routes.mens);
    app.get("/womens", routes.womens);
    app.get("/mensProducts", routes.mensProducts);
    app.get("/mensClothing", routes.mensClothing);
    app.get("/womensProducts", routes.womensProducts);


    const server = app.listen(3000, () => {
        console.log(`Express is running on port ${server.address().port}`);
    });
} catch (e) {
    console.log(`Error ${e}`);

}