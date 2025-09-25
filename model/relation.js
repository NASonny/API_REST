const User = require('./user/user.model');
const Post = require('./../post/post.model');

const relate = async () => {
    Post.belongsTo(User, { foreignKey: "userId" });
}

module.exports = relate;