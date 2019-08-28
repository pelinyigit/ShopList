const express = require('express');
const http    = require("http");
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('config');
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
  // app.use('/', routes);

  //routes
  //app.use('/users', require('./routes/users'));

  app.get("/", routes.mens);
  app.get("/womens", routes.womens);
  app.get("/registration", routes.registration);
  app.get("/mensProducts", routes.mensProducts);
  app.get("/mensClothing", routes.mensClothing);
  app.get("/womensProducts", routes.womensProducts);
  

  const server = app.listen(3000, () => {
    console.log(`Express is running on port ${server.address().port}`);
  });
} catch (e) {
  console.log(`Error ${e}`);

}


/**
 * 
 * // Module dependencies.
var express = require("express")
  , http    = require("http")
  , path    = require("path")
  , routes  = require("./routes");
var app     = express();

// All environments
app.set("port", 80);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.favicon());
app.use(express.logger("dev"));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser("61d333a8-6325-4506-96e7-a180035cc26f"));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.errorHandler());

// App routes
app.get("/"     , routes.registration);
app.get("/hello", routes.hello);

// Run server
http.createServer(app).listen(app.get("port"), function() {
	console.log("Express server listening on port " + app.get("port"));
});

 */