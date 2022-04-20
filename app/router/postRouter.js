const express = require('express');
const router = express.Router();
const postController = require('../controller/postController');
const routerWrapper = require('../helper/routerWrapper');
const handleError = require('../helper/handleError')

router.route('/')
    .get(routerWrapper(postController.getAll))
    .post(routerWrapper(postController.create));

router.route('/:id(\\d+)')
    .get(routerWrapper(postController.get))
    .patch(routerWrapper(postController.update))
    .delete(routerWrapper(postController.delete));

router.route('/category/:id(\\d+)')
    .get(routerWrapper(postController.getByCategory));

router.use(handleError);

module.exports = router;