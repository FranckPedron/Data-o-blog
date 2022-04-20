const dataMapper = require('../model/categoryDB')
const debug = require('debug')("ControllerCategory");

const controllerCategory = {
    async getAll(req, res) {
        debug("test getAllCategories");
        const categories = await dataMapper.getAll();
        res.json(categories);
    },

    async get(req, res) {
        debug("test getOneCategory");
        const categoryId = Number(req.params.id);
        const category = await dataMapper.getById(categoryId);
        res.json(category);
    },

    async create(req, res) {
        debug("test createCategory","req.body",req.body );
        const category = req.body;
        const result = await dataMapper.create(category);
        res.json(result);
    },
    
    async update(req, res) {
        const category = req.body;
        const result = await dataMapper.update(req.params.id,category);
        res.json(result);
    },

    async delete(req,res) {
        const categoryId = req.body;
        await dataMapper.delete(categoryId);

    }
}

module.exports = controllerCategory;