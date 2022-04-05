const express = require ('express');
const router = express.Router();
const routerWrapper = require('./middleware/routerWrapper.js');
const controllerCategory = require('./controller/controllerCategory');
const controllerPost = require('./controller/controllerPost');

router.get('/posts', routerWrapper(controllerPost.getAllPosts))
    .get('/categories', routerWrapper(controllerCategory.getAllCategories))
    .get('/post/:id',routerWrapper(controllerPost.getOnePost))
    .get('/categories/:id', routerWrapper(controllerCategory.getOneCategory));

router.post('/posts',routerWrapper(controllerPost.addPost))
        .post('categories', routerWrapper(controllerCategory.addCategory));

router.patch('posts/:id', routerWrapper(controllerPost.patchPostById))
        .patch('/categories/:id', routerWrapper(controllerCategory.patchOneCategoryById));

router.delete('/posts/:id', routerWrapper(controllerPost.deleteOnePostById))
        .delete('/categories/:id', routerWrapper(controllerCategory.deleteOneCategoryById));


module.exports = router;