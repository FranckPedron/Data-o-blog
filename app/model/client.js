const { Client } = require('pg');

const client = new Client({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    password: process.env.PGPASSWORD,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE
});

client
    .connect()
    .then(() => console.log('connected'))
    .catch(err => console.error('connection error', err.stack));

module.exports = client;

