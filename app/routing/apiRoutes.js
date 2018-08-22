//Load data
var friendsArray = require("../data/friends");


//Routing
module.exports = function (app) {
    // A GET route with the url /api/friends. This will be used to display a JSON 
    // of all possible friends.
    app.get("/api/friends", function (req, res) {
        res.json(friendsArray);
    });


    // A POST routes /api/friends. This will be used to handle incoming survey
    //  results. This route will also be used to handle the compatibility logic.
    app.post("/api/friends", function (req, res) {
        
        console.log(req.body.scores);

        //compatibility logic
        var bestMatch = {
            diff: 100,
            friend: {}
        }
        for (var i = 0; i < friendsArray.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < friendsArray[i].scores.length; j++) {
                var difference = Math.abs(parseInt(friendsArray[i].scores[j]) - parseInt(req.body.scores[j]));
                totalDifference += difference;
            }
            console.log(totalDifference);
            if (totalDifference < bestMatch.diff) {
             bestMatch.diff = totalDifference;
             bestMatch.friend = friendsArray[i];
            }
        }

        res.json(bestMatch);
        console.log(bestMatch);

        // friendsArray.push(req.body);
    });

}










