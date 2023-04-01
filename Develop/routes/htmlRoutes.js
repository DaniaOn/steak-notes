const path = require ("path");

//notes page
module.exports = function (app){
    app.get("/notes",function(req, res){
        res.sendFile(path.join (_dirname + "Develop\public\index.html"));
    });
}
./de
//home page