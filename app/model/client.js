require('dotenv').config();
const { Client } = require('pg');

const client = new Client(`postgresql://postgres:${process.env.PGPASSWORD}@${process.env.PGHOST}/${process.env.PGDATABASE}`);

client
    .connect()
    .then(() => console.log('connected'))
    .catch(err => console.error('connection error', err.stack));

module.exports = client;