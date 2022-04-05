const res = require('express/lib/response');
const dataMapper = require('../dataMapper')

const controllerCategory = {
    async getAllCategories() {
        const categories = await dataMapper.getAllCategories();
        res.json(categories)
    }
}

module.exports = controllerCategory;