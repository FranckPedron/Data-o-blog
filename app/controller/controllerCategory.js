const { addCategory } = require('../dataMapper/dataMapper');
const dataMapper = require('../dataMapper/dataMapper')

const controllerCategory = {
    async getAllCategories(req, res, next) {
        const categories = await dataMapper.getAllCategories();
        res.json(categories)
    },

    async getOneCategory(req, res, next) {
        const categoryId = Number(req.params.id);
        const category = await dataMapper.getOneCategory(categoryId);
        res.json(category);
    },
    
    async addCategory(req,res,next) {
        const category = req.body;
        const result = await dataMapper.addCategory(category);
        res.send(result);
    }
}

module.exports = controllerCategory;