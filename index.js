require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const router = require('./app/router');

app.use(router);


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});