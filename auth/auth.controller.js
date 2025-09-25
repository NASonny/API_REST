const User = require("../user/user.model")
const jwt = require("jsonwebtoken")
const bcryptjs = require('bcryptjs');
require('dotenv').config()

exports.signin = async (req, res, next) => {
    try {
        const hash = bcryptjs.hashSync(req.body.password, 10)
        let user = await User.create({
            email: req.body.email,
            password: hash,
            username: req.body.username
        });
        res.status(201).json(user)
    } catch (e) {
        res.status(400).json({ error: "Ce compte existe déjà." });
    }
}

exports.login = async (req, res, next) => {
    try {
        let user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (!user) {
            return res.status(404).json({ error: "Email ou mot de passe incorrect!" });
        }
        if (!bcryptjs.compareSync(req.body.password, user.password)) {
            return res.status(404).json({ error: "Email ou mot de passe incorrect!" });
        }
        const token = jwt.sign({
            id: user.id
        }, process.env.JWT_KEY);
        res.status(201).json({ user, token })
    } catch (e) {
        res.status(400).json({ error: "" })
    }
}