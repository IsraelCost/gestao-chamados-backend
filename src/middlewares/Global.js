module.exports = {
    notFound(req, res, next) {
        const error = new Error('Not found :(');
        error.status = 404;
        next(error);
    },

    catchAll(err, req, res, next) {
        return res.status(err.status || 500).json({ error: err.message });
    }
};