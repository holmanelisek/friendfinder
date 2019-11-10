//Your apiRoutes.js file should contain two routes:

//A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.

//A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.



  // Displays all characters
  app.get("/api/friends", function(req, res) {
    return res.json(characters);
  });
  
//this is the character creator from the star wars app, for example/basis  
  // Create New Characters - takes in JSON input
  app.post("/api/characters", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newCharacter = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newCharacter);
  
    characters.push(newCharacter);
  
    res.json(newCharacter);
  });

