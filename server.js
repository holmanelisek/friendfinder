
var express = require("express");
var path = require("path");
var apijs = require("./app/routing/apiRoutes.js");
var htmljs = require("./app/routing/htmlRoutes.js");
var datajs = require("./app/data/friends.js");

var app = express();
var PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", htmljs.home);
app.get("/survey",htmljs.survey);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
