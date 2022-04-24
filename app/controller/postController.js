const dataMapper = require('../model/postDB');
const debug = require('debug')("ControllerPost");
const cacheHelper = require('../helper/cache');

const controllerPost = {

    async getAll(req, res) {
        const posts = await dataMapper.getAll();

        cacheHelper.set("posts", JSON.stringify(posts));

        res.json(posts);
    },
    
    async create(req, res) {
        const post = req.body;
        
        const result = await dataMapper.create(post);

        cacheHelper.del(req.url);

        res.json(result);
    },

    async get(req, res) {
        const postId = Number(req.params.id);
        const post = await dataMapper.getById(postId);

        cacheHelper.set(req.url, post);

        res.json(post);
    },

    async update(req, res) {
        const post = req.body;
        const result = await dataMapper.update(req.params.id,post);

        res.json(result);
    },

    async delete(req, res) {
        postId = req.params.id;
        await dataMapper.delete(postId);

        cacheHelper.del(req.url);
        
    },

    async getByCategory(req, res) {
        const categoryId = req.params.id;
        const posts = await dataMapper.getPostByCategory(categoryId);

        res.json(posts);
    }
}

module.exports = controllerPost;