const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categoryController');
const routerWrapper = require('../helper/routerWrapper');
const handleError = require('../helper/handleError');
const cacheHelper = require('../helper/cache');

router.route('/')
    .get(cacheHelper.get, routerWrapper(categoryController.getAll))
    .post(routerWrapper(categoryController.create));

router.route('/:id(\\d+)')
    .get(cacheHelper.get, routerWrapper(categoryController.get))
    .patch(routerWrapper(categoryController.update))
    .delete(routerWrapper(categoryController.delete));

router.use(handleError);

module.exports = router;