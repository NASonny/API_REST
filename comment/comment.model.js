const {DataTypes} = require('sequelize');
const db = require('../model/index');

const Comment = db.define('Comment',{
    comment: {
        type : DataTypes.STRING
    }
},{
    tableName: "comment"
});

module.exports = Comment;