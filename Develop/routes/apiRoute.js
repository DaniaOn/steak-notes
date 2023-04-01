const fs = require ("fs"); //Dev for Json
const uId = require("uId"); // ID package for npm

module.exports = function(app){
    //GET API
    app.get("/api/notes",function(req, res){
        console.log ('Note request: GET');
        // To read the json
        let data = fs.readFileSync('Develop\db\db.json','utf8');
        //Sending response
        res.json(JSON.parse(data));
    });

    });





}