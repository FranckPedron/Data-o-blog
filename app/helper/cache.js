const redis = require('redis');

const client = redis.createClient();
client.connect();

const cacheModule = {
    async get (req, res,next) {
        console.log("req.url: ", req.url)
        if (await client.exists(req.url)) {
            const result = await client.get(req.url);

            res.json(JSON.parse(result));
        }
        else {
            next();
        }
    },

    set(key, value) {
        client.set(key, value);
    },

    del(key) {
        client.del(key);
    }
};

module.exports = cacheModule;