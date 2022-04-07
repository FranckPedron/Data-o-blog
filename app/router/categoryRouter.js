const express = require('express');
const router = express.Router();
const controllerCategory = require('../controller/controllerCategory');
const routerWrapper = require('../helper/routerWrapper');
const handleError = require('../helper/handleError')

router.route('/')
    .get(routerWrapper(controllerCategory.getAllCategories))
    .post(routerWrapper(controllerCategory.createCategory));

router.route('/:id(\\d+)')
    .get(routerWrapper(controllerCategory.getOneCategory))
    .patch(routerWrapper(controllerCategory.patchOneCategoryById))
    .delete(routerWrapper(controllerCategory.deleteOneCategoryById));

router.use(handleError);

module.exports = router;