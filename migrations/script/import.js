require('dotenv').config();
const categories = require('../../data/categories.json');
const posts = require('../../data/posts.json');
const client = require('../../app/model/client');

const importModule = {
    async insert() {

        const categoryCatalog = {};

        for await (const cat of categories) {
            const queryCat = {
                text: `INSERT INTO "category" (route, label) VALUES ($1,$2) RETURNING id;`,
                values: [cat.route, cat.label]
            };

            const id = (await client.query(queryCat)).rows[0].id;
            categoryCatalog[cat.label] = id;
        }

        for await (const post of posts) {
            const queryPost = {
                text: `INSERT INTO "post" (slug, title, excerpt, content,category_id) VALUES ($1,$2,$3,$4,$5);`,
                values: [post.slug, post.title, post.excerpt, post.content, categoryCatalog[post.category]]
            }
            client.query(queryPost);
        }
    }
}

module.exports = importModule;