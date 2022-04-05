require('dotenv').config();
const categories = require('./categories.json');
const posts = require('./posts.json');
const debug = require('debug')('Datas');
const client = require('../app/model/client');



for (const cat of categories) {
    debug(cat.route,cat.label)
    async () =>{
        const query = {
            text: "INSERT INTO category VALUES('route','label') ($1, $2)",
            values: [cat.route,cat.label]
        }
        await client.query(query);
    }
    // il faut qu'on récupère cat.route et cat.label pour faire un insert into table "categories" values('route', 'label') (cat.route, cat.label)
}