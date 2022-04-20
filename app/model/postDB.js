const client = require("./dbClient");
const debug = require('debug')('DataMapper');

const dataMapper = {

    /*********/
    /* POST  */
    /*********/

    /**
     * @typedef {object} Post
     * @property {number} id - Indentifiant unique, Pk de la table
     * @property {string} slug - URL 
     * @property {string} title - Titre de l'article
     * @property {string} excerpt - Texte d'introduction de l'article
     * @property {string} content - Contenu de l'article
     * @property {number} categoryId - Id de la catégorie à laquelle est rattaché le post
     * @property {string} category - Label de la catégorie à laquelle est rattaché le post
     */

    /**
     * @typedef {object} newPost
     * @property {string} slug - URL 
     * @property {string} title - Titre de l'article
     * @property {string} excerpt - Texte d'introduction de l'article
     * @property {string} content - Contenu de l'article
     * @property {number} categoryId - Id de la catégorie à laquelle est rattaché le posts
     */


    /**
     * Récupère tout sans filtre ni ordre
     * @returns {Post[]} - Tous les posts dans la base de donnée
     */
    async getAll() {
        debug('getpost');
        const query = {
            text: `SELECT * FROM post`
        }
        const result = await client.query(query);
        return result.rows;
    },

    /**
     * 
     * @param {Number} id L'id passé en paramètre d'un post
     * @returns Le post concerné
     */
    async getById(id) {
        debug('getOnePostById');
        const query = {
            text: 'SELECT * FROM post WHERE id = $1',
            values: [id]
        }
        const result = await client.query(query);
        return result.rows[0];
    },

    /**
     * Crée un post
     * @param {Object} post 
     * @returns {Post} Le post créé
     */
    async create(post) {
        
            const query = {
                text: `INSERT INTO "post" (category, slug, title, excerpt, content) VALUES ($1,$2,$3,$4,$5)`,
                values: [post.category, post.slug, post.title, post.excerpt, post.content]
            }
            const savedPost = await client.query(query);
            return savedPost.rows[0];
    },

   /**
    * Récupère les posts avec une certaine catégorie
    * @param {Number} id La catégorie désirée
    * @returns {Post[]} Les posts ayant la catégorie
    */
    async getPostByCategory(id) {
        const catQuery = {
            text: `select * from post_with_category where category_id = $1`,
            values: [id]
        }
        const result = await client.query(catQuery);
        return result.rows;
    },

    /**
     * Modifie dans la base de données
     * @param {number} id - L'id à modifier
     * @param {newPost} post - Les données à modifier
     * @returns {Post} - Le Post modifié
     */
     async update(id,post){
        const fields = Object.keys(post).map((prop, index) => `"${prop}" = $${index + 1}`);
        const values = Object.values(post);

        const savedPost = await client.query(
            `
                UPDATE post SET
                    ${fields}
                WHERE id = $${fields.length + 1}
                RETURNING *
            `,
            [...values, id],
        );

        return savedPost.rows[0];
    },

    /**
     * Supprime de la base de données
     * @param {number} id - L'id à supprimer
     * @returns {boolean} - Le résultat de la suppression
     */
    async delete(id){
        const result = await client.query('DELETE FROM post WHERE id = $1', [id]);
        // si rowCount est à 1 alors c'est que la suppression s'est bien déroulée sinon nous aurions 0
        // !! permet la conversion en booléen (true ou false)
        return !!result.rowCount;
    }
}

module.exports = dataMapper;