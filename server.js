var jsdom = require('jsdom');
$ = require('jquery')(new jsdom.JSDOM().window);
var express = require("express");
var path = require("path");
var apijs = require("./app/routing/apiRoutes.js");
var htmljs = require("./app/routing/htmlRoutes.js");
var datajs = require("./app/data/friends.js");




var app = express();
var PORT = process.env.PORT || 1500;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

$("document").ready(function() {
  console.log("Hello");

app.get("/", htmljs.home);
app.get("/survey",htmljs.survey);
app.get("/api/friends",apijs.apifriend);

$("#addButton").on("click", function() {
  console.log("Hello!");
  var createUser = {
//        name: $("#name").val().trim(),
//        photo: $("#photo").val().trim(),
    name: "yes",
    photo: "hello",
    scores: [parseInt($("#questionOne").val()),
            parseInt($("#questionTwo").val()),
            parseInt($("#questionThree").val()),
            parseInt($("#questionFour").val()),
            parseInt($("#questionFive").val()),
            parseInt($("#questionSix").val()),
            parseInt($("#questionSeven").val()),
            parseInt($("#questionEight").val()),
            parseInt($("#questionNine").val()),
            parseInt($("#questionTen").val())]
  
  }
  console.log(createUser);
  
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
});

