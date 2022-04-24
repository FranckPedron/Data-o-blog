const dataMapper = require('../model/categoryDB')
const debug = require('debug')("ControllerCategory");
const cacheHelper = require('../helper/cache');

const controllerCategory = {
    async getAll(req, res) {
        debug("test getAllCategories");
        const categories = await dataMapper.getAll();

        //Mise en cache
        cacheHelper.set("categories", JSON.stringify(categories));

        res.json(categories);
    },
    
    async create(req, res) {
        debug("test createCategory","req.body",req.body );
        const category = req.body;
        
        // je supprime la clef du cache pour le forcer à se recréer (flush)
        cacheHelper.del(req.url);
        
        const result = await dataMapper.create(category);
        res.json(result);
    },
    
    async get(req, res) {
        debug("test getOneCategory");
        
        const category = await dataMapper.getById(req.params.id);

        cacheHelper.set(req.url, category);
        
        res.json(category);
    },
    
    async update(req, res) {
        const category = req.body;
        const result = await dataMapper.update(req.params.id,category);

        res.json(result);
    },

    async delete(req,res) {
        const categoryId = req.body;
        const result = await dataMapper.delete(categoryId);
        
        cacheHelper.del(req.url);
        
        res.json(result);
    }
}

module.exports = controllerCategory;