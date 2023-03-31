const express = require('express');
const path = require('path');
const fs = require("fs");
const util = require ("util");

const app = express();
const PORT = 3001;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));
require("./Develop/routes/apiRoute")(app);
require("./Develop/routes/htmlRoutes")(app);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);