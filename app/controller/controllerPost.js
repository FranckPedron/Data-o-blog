const dataMapper = require('../model/dataMapper');
const debug = require('debug')("ControllerPost");

const controllerPost = {

    async getAllPosts(req, res, next) {
        const posts = await dataMapper.getPosts();
        res.json(posts);
    },

    async getOnePost(req, res, next) {
        const postId = Number(req.params.id);
        const post = await dataMapper.getOnePostById(postId);
        res.json(post);
    },

    async addPost(req, res, next) {
        const post = req.body;
        const result = await dataMapper.addOnePost(post);
        res.send(result);
    },

    async patchPostById(req, res, next) {

    },

    async deleteOnePostById(req, res, next) {

    },

    async getPostByCategory(req, res, next) {

    }
}

module.exports = controllerPost;