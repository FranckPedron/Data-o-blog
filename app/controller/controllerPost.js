const dataMapper = require('../dataMapper/dataMapper')

const controllerPost = {
    async getAllPosts(req, res, next) {
        const posts = await dataMapper.getAllPosts();
        res.json(posts);
    },

    async getOnePost(req, res, next) {
        const postId = Number(req.params.id);
        const post = await dataMapper.getOnePost(postId);
        res.json(post);
    },

    async addPost(req,res,next) {
        const post = req.body;
        const result = await dataMapper.addPost(post);
        res.send(result);
    }
}

module.exports = controllerPost;