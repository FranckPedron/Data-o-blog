const client = require("pg/lib/native/client")

const dataMapper = {
        async getAllPosts() {
            const query = {
                text: `SELECT * FROM post;`
            }
            return await client.query(query);
        }

    }

    module.exports = dataMapper;