const User = require("../user/user.model")
const jwt = require("jsonwebtoken")
const bcryptjs = require('bcryptjs');
require('dotenv').config()

exports.getAll = async (req, res) => {
    try {
        let userList = await User.findAll({
            attributes: ["id", "username", "email", "createdAt"]
        })
        res.status(200).json(userList)
    } catch (e) {
        res.status(400).json({ error: "Impossible de récupérer les utilisateurs" })
    }
}

exports.getById = async (req, res) => {
    try {
        let user = await User.findOne({
            where: {
                id: req.params.id
            },
            attributes: ["id", "username", "email", "createdAt"]
        });
        res.status(200).json(user)
    } catch (e) {
        res.status(400).json({ error: "Impossible de récupérer les utilisateurs" })
    }
}

exports.update = async (req, res, next) => {
    try {
        let user = await User.update({
            email: req.body.email,
        }, {
            where: {
                id: req.params.id
            }
        });
        res.status(201).json(user)
    } catch (e) {
        res.status(400).json({ error: "Ce compte existe déjà." });
    }
}

exports.delete = async (req, res, next) => {
    try {
        let user = await User.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(201).json(user)
    } catch (e) {
        res.status(400).json({ error: "Ce compte existe déjà." });
    }
}


