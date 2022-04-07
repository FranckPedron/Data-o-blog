const express = require('express');
const router = express.Router();
const controllerPost = require('../controller/controllerPost');
const routerWrapper = require('../helper/routerWrapper');
const handleError = require('../helper/handleError')

router.route('/')
    .get(routerWrapper(controllerPost.getAllPosts))
    .post(routerWrapper(controllerPost.addPost));

router.route('/:id(\\d+)')
    .get(routerWrapper(controllerPost.getOnePost))
    .patch(routerWrapper(controllerPost.patchPostById))
    .delete(routerWrapper(controllerPost.deleteOnePostById));

router.route('/category/:id(\\d+)')
    .get(routerWrapper(controllerPost.getPostByCategory));

router.use(handleError);

module.exports = router;