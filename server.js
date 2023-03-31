//my dependencies
const express = require('express');
const path = require('path');

//Express App
const app = express();
const PORT = 3001;

//For data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());//For data parsing json
app.use(express.static("public")); //middleware static files from public
//HTML and API routes for the page
require("./Develop/routes/apiRoute")(app);
require("./Develop/routes/htmlRoutes")(app);

//server
app.listen(PORT, function() {
  console.log('App listening at: ' + PORT)
 });