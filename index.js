require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const router = require('./app/router');
const debug = require('debug')('App');

app.use(router);


app.listen(PORT, () => {
    debug(`http://localhost:${PORT}`)
});