var express = require("express");
// var routes = require("./controllers/catsController.js");
var bodyParser = require("body-parser");
var routes = require("./controllers/burgers_controllers.js");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");


var app = express();
var port = process.env.PORT || 3000;

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false}));

app.use("/burgers", express.static("burgers"));
app.use("/burgers", routes);


app.listen(port);