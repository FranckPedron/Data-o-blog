const { GetOnePost } = require("../controller/controllerPost");
const client = require("../model/client");

const dataMapper = {
        async getAllPosts() {
            const query = {
                text: `SELECT * FROM post;`
            }
            const result = await client.query(query);
            return result.rows;
        },

        async getAllCategories() {
            const query = {
                text: `SELECT * FROM category;`
            }
            const result = await client.query(query);
            return result.rows;
        },

        async getOnePost(id) {
            const query = {
                text: 'SELECT * FROM post WHERE id = id;'
            }
            const result = await client.query(query);
            return result.rows[0];
        },

        async getOneCategory(id) {
            const query = {
                text: 'SELECT * FROM category WHERE id = $1;',
                values:[id]
            }
            const result = await client.query(query);
            return result.rows[0];
        },

        async addPost(post) {
            const result = await client.query("SELECT id from post Where id = $1;", [post.id]);

            if (result.rowCount >0) {
                return console.error('Ce post existe déjà');
            }
           else
            { 
                const query = {
                text: `INSERT INTO "post" ($1, $2, $3, $4, $5);`,
                values: [post.category,post.slug, post.title, post.excerpt, post.content]
            }
            await client.query(query);
        }
    },

        async addCategory(category) {
        const result = await client.query("SELECT route FROM category WHERE route = $1;",[category.route])
        if(result.rowCount > 0){
            return console.error('Cette catégorie existe déjà')
        }
        else {
            const query = {
                text: `INSERT INTO "category" ($1, $2);`,
                values: [category.route, category.label]
            }

            await client.query(query);
        }
    }
}

    module.exports = dataMapper;