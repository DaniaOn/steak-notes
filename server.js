const express = require('express');
const path = require('path');
const fs = require("fs");
const util = require ("util");

const app = express();
const PORT = 3001;


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);