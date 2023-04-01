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

    //POST API
    app.post("/api/notes", (req,res) => {
        //saving notes
        const nwNote = {
            ...req.body,
            id:uId(),
        };

        console.log('New notes request');

        // To read the JSON
        let data = fs.readFileSync('Develop\db\db.json','utf8');

        const dataJSON = JSON.parse(data);
        dataJSON.push(nwNote);

        fs.watchFile(
            'Develop\db\db.json', JSON.stringify(dataJSON),
            (err, text) => {
                if(err){
                    console.error(err);
                    return;
                }
                console.log("Hi", text);
            }
        );
        console.log("Success, a new note added");

        res.json(data);
    });

    
    });





}