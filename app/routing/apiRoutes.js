//Your apiRoutes.js file should contain two routes:

//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var express = require("express");
var path = require("path");

var app = express();

  // Displays all characters
  app.get("/api/friends", function(res) {
    return res.json(friends);
  });
  

//    $("#addButton").on("click", function(event) {
//      event.preventDefault();
//      var createUser = {
//        name: $("#name").val().trim(),
//        photo: $("#photo").val().trim(),
//        scores: [parseInt($("#questionOne").val()),
//                parseInt($("#questionTwo").val()),
//                parseInt($("#questionThree").val()),
//                parseInt($("#questionFour").val()),
//                parseInt($("#questionFive").val()),
//                parseInt($("#questionSix").val()),
//                parseInt($("#questionSeven").val()),
//                parseInt($("#questionEight").val()),
//                parseInt($("#questionNine").val()),
//                parseInt($("#questionTen").val())]
//      };

//needs post function