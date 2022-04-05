const dataMapper = require('../dataMapper')

const controllerPost = {
    async getAllPosts() {
        const post = await dataMapper.getAllPost();
        res.json(post)
    }
}

module.exports = controllerPost;