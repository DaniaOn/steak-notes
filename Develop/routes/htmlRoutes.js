const path = require ("path");

module.exports = function (app){
    //notes page
    app.get("/notes",function(req, res){
        res.sendFile(path.join (_dirname + 'Develop\public\notes.html'));
    });

    //home page    
    app.get("/",function(req, res){
    res.sendFile(path.join (_dirname + 'Develop\public\index.html'));
    });
};
