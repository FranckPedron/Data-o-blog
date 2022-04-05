require('dotenv').config();
const categories = require('./categories.json');
const posts = require('./posts.json');
const debug = require('debug')('Datas');
const client = require('../app/model/client');


const importData = {
    async insert(){
        for await (const cat of categories){
            const queryCat = {
                text:`INSERT INTO "category" (route, label) VALUES ($1,$2);`,
                values:[cat.route,cat.label]
            }
            debug(queryCat)
            client.query(queryCat);
        }

        for await (const post of posts) {
            const queryPost = {
                text: `INSERT INTO "post" (category, slug, title, excerpt, content);`,
                values: [post.category,post.slug, post.title, post.excerpt, post.content]
            }
            client.query(queryPost);
        }
    }
};


importData.insert();

// for (const cat of categories) {
//     debug(cat.route,cat.label)
//     console.log(`'${cat.route}','${cat.label}'`);
//     await insert(cat);
//     console.log(`fait`);
    
//     // il faut qu'on récupère cat.route et cat.label pour faire un insert into table "categories" values('route', 'label') (cat.route, cat.label)
// }

// const insert = async (cat) => {
//     await client.query(`INSERT INTO "category" ("route","label") VALUES ('${cat.route}','${cat.label}');`);
// }

// console.log('done')