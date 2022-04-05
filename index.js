require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const routes = require('./data/import');


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});