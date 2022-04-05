
const routerWrapper = (method) => {
    return async (req, res, next ) => {
        try {
            await method(req ,res ,next);
        } catch (error) {
            next(error)
        }
    }
};

module.exports = routerWrapper;