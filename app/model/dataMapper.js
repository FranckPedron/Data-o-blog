const client = require("../model/client");
const debug = require('debug')('DataMapper');

const dataMapper = {
        /**
         * 
         * @returns Retourne tous les posts
         */
        async getPosts() {
            debug('getpost');
            const query = {
                text: `SELECT * FROM post`
            }
            const result = await client.query(query);
            return result.rows;
        },

        /**
         * 
         * @returns Retourne toutes les categories
         */
        async getAllCategories() {
            debug('getAllCategories');
            const query = {
                text: `SELECT * FROM category`
            }
            const result = await client.query(query);
            return result.rows;
        },

        /**
         * 
         * @param {Number} id L'id passé en paramètre d'un post
         * @returns Le post concerné
         */
        async getOnePostById(id) {
            debug('getOnePostById');
            const query = {
                text: 'SELECT * FROM post WHERE id = $1',
                values: [id]
            }
            const result = await client.query(query);
            return result.rows[0];
        },

        /**
         * 
         * @param {Number} id L'id passé en paramètre d'une catégorie
         * @returns La catégorie concernée
         */
        async getOneCategoryById(id) {
            debug('getOneCategoryById')
            const query = {
                text: 'SELECT * FROM category WHERE id = $1',
                values:[id]
            }
            const result = await client.query(query);
            return result.rows[0];
        },

        /**
         * 
         * @param {Object} post 
         * @returns 
         */
        async addOnePost(post) {
            debug('addOnePost', post)
            const result = await client.query("SELECT id from post Where id = $1", [post.id]);

            if (result.rowCount >0) {
                return console.error('Ce post existe déjà');
            }
           else
            { 
                const query = {
                text: `INSERT INTO "post" (category, slug, title, excerpt, content) VALUES ($1,$2,$3,$4,$5)`,
                values: [post.category,post.slug, post.title, post.excerpt, post.content]
            }
            await client.query(query);
        }
    },

        async addCategory(category) {
            debug('addCategory', 'category', category);
       /* 
        const result = await client.query({text:"SELECT label FROM category WHERE label = $1", values: [category.label]});
        debug("result",result);
        if(result.rowCount > 0){
            return console.error('Cette catégorie existe déjà')
        }
        else {*/
            const query = {
                text: `INSERT INTO "category" (route, label) VALUES ($1, $2) RETURNING id,label,route`,
                values: [category.route, category.label]
            }
            debug("Query",query);
            await client.query(query);
        // }
    }
}

    module.exports = dataMapper;