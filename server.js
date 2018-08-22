//Dependencies

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//creating express server
var app = express();

//Set an initial port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Router
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Listener
app.listen(PORT, function() {
    console.log("App listening on Port: " + PORT);
});