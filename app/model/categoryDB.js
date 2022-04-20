const client = require("./dbClient");
const debug = require('debug')('DataMapper');

const dataMapper = {

    /*************/
    /* CATEGORY  */
    /*************/

    /**
     * @typedef {object} Category
     * @property {number} id - Identifiant unique Pk de la table
     * @property {string} route - Segment d'URL pour accéder à la catégorie (pour SEO)
     * @property {string} label - Le nom affichable de la catégorie
     */

    /**
     * @typedef {object} NewCategory
     * @property {string} route - Segment d'URL pour accéder à la catégorie (pour SEO)
     * @property {string} label - Le nom affichable de la catégorie
     */

    /**
     * Récupère tout sans filtre ni ordre
     * @returns {Category[]} Toutes les categories
     */
    async getAll() {
        debug('getAllCategories');
        const query = {
            text: `SELECT * FROM category`
        }
        const result = await client.query(query);
        return result.rows;
    },
    /**
     * 
     * @param {Number} id L'id passé en paramètre d'une catégorie
     * @returns {Category} La catégorie concernée
     */
    async getById(id) {
        debug('getOneCategoryById')
        const query = {
            text: 'SELECT * FROM category WHERE id = $1',
            values: [id]
        }
        const result = await client.query(query);
        return result.rows[0];
    },

    /**
     * Crée une catégorie
     * @param {Object} category
     * @returns {Category} La catégorie créée
     */
    async create(category) {
        debug('addCategory', 'category', category);
        
        const query = {
            text: `INSERT INTO "category" (route, label) VALUES ($1, $2) RETURNING id,label,route`,
            values: [category.route, category.label]
        }
        
        const savedCategory = await client.query(query);
        return savedCategory.rows[0];
    
    },

    /**
     * Modifie dans la base de données
     * @param {number} id - L'id à modifier
     * @param {newCategory} category - Les données à modifier
     * @returns {Category} - La Category modifiée
     */
    async update(id, category) {
        const fields = Object.keys(category).map((prop, index) => `"${prop}" = $${index + 1}`);
        const values = Object.values(category);

        const savedCategory = await client.query(
            `
                UPDATE category SET
                    ${fields}
                WHERE id = $${fields.length + 1}
                RETURNING *
            `,
            [...values, id],
        );

        return savedCategory.rows[0];
    },

    /**
     * Supprime de la base de données
     * @param {number} id - L'id à supprimer
     * @returns {boolean} - Le résultat de la suppression
     */
    async delete(id) {
        const result = await client.query('DELETE FROM category WHERE id = $1', [id]);
        // si rowCount est à 1 alors c'est que la suppression s'est bien déroulée sinon nous aurions 0
        // !! permet la conversion en booléen (true ou false)
        return !!result.rowCount;
    }
}

module.exports = dataMapper;