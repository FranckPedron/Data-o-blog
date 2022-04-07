const dataMapper = require('../model/dataMapper')
const debug = require('debug')("ControllerCategory");

const controllerCategory = {
    async getAllCategories(req, res) {
        debug("test getAllCategories");
        const categories = await dataMapper.getAllCategories();
        res.json(categories);
    },

    async getOneCategory(req, res) {
        debug("test getOneCategory");
        const categoryId = Number(req.params.id);
        const category = await dataMapper.getOneCategoryById(categoryId);
        res.json(category);
    },

    async createCategory(req, res) {
        debug("test createCategory","req.body",req.body );
        const category = req.body;
        const result = await dataMapper.addCategory(category);
        res.json(result);
    },
    
    async patchOneCategoryById(req, res) {

    },

    async deleteOneCategoryById(req,res) {

    }
}

module.exports = controllerCategory;