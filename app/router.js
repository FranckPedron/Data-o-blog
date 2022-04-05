const express = require ('express');
const router = express.Router();
const routerWrapper = require('./middleware/routerWrapper.js');
const controllerCategory = require('../')

router.get('/posts', routerWrapper(controllerPost.getAllPosts));
router.get('/categories', routerWrapper(controllerCategory.getAllCategories));


module.exports = router;