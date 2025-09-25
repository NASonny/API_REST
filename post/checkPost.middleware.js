const Post = require('./post.model')

const checkPost = async (req, res, next) => {
    let post = await Post.findOne({
        where: {
            id: req.params.id
        }
    });
    if (post) {
        next();
    } else {
        res.status(404).json({ error: "Le post n'existe pas" });
    }
}

module.exports = checkPost;