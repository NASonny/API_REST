const User = require('../user/user.model');
const Post = require('../post/post.model');
const Comment = require('../comment/comment.model');

const relate = async () => {
    Post.belongsTo(User, { foreignKey: "userId" });
    Comment.belongsTo(Post, { foreignKey: "postId" });
}

module.exports = relate;