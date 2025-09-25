const { DataTypes } = require('sequelize');
const db = require('./../model/index');

const Post = db.define('Post', {
    titre: {
        type: DataTypes.STRING
    },
    contenu: {
        type: DataTypes.STRING
    },
    picture: {
        type: DataTypes.STRING
    }
}, {
    tableName: "post"
});

module.exports = Post;