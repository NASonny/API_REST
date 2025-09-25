const { DataTypes } = require('sequelize');
const db = require('../model/index');

const user = db.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    tableName: 'users',
    timestamps: true,
    underscored: true,
});
module.exports = user;