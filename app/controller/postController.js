const dataMapper = require('../model/postDB');
const debug = require('debug')("ControllerPost");

const controllerPost = {

    async getAll(req, res) {
        const posts = await dataMapper.getAll();
        res.json(posts);
    },

    async get(req, res) {
        const postId = Number(req.params.id);
        const post = await dataMapper.getById(postId);
        res.json(post);
    },

    async create(req, res) {
        const post = req.body;
        console.log(post);
        const result = await dataMapper.create(post);
        res.json(result);
    },

    async update(req, res) {
        const post = req.body;
        const result = await dataMapper.update(req.params.id,post);
        res.json(result);
    },

    async delete(req, res) {
        postId = req.params.id;
        await dataMapper.delete(postId);

    },

    async getByCategory(req, res) {
        const categoryId = req.params.id;
        const posts = await dataMapper.getPostByCategory(categoryId);

        res.json(posts);
    }
}

module.exports = controllerPost;