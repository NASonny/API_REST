const { JSON } = require('sequelize');
const Post = require('./post.model');

//Récupérer tous les posts
exports.GetAll = async (req, res) => {
    try {
        let postlist = await Post.findAll()
        res.status(200).json(postlist);
    } catch (e) {
        res.status(400).json('Impossible de récupérer les posts')
    }
};

//Récupérer un post par rapport à son Id
exports.GetById = async (req, res) => {
    try {
        let post = await Post.findOne({
            where: {
                id: req.params.id
            }
        });
        produit.picture = "http://localhost:3000/images/" + post.picture;
        res.status(200).json(post)
    } catch (e) {
        res.status(400).json('Impossible de récupérer le post')
    }
};

//Créer un post
exports.Create = async (req, res) => {
    try {
        let body = JSON.parse(req.body.post);
        if (req.file) {
            body.picture = req.file.filename
        }
        let post = await Post.create({
            titre: body.titre,
            contenu: body.contenu,
            picture: body.picture
        });
        res.status(201).json(post);
    } catch (e) {
        res.status(400).json({ error: 'Impossible de créer le post' })
    }
};

exports.Update = async (req, res) => {
    try {
        let post = await Post.findOne({
            where: {
                id: req.params.id
            }
        });
        if (req.token.id !== post.userId) {
            return res.status(403).json({ error: "Vous n'avez pas les droits pour modifier ce post" })
        }
        if (req.body.titre) {
            post.titre = req.body.titre;
        }
        if (req.body.contenu) {
            post.contenu = req.body.contenu;
        }
        post.save();
        res.status(201).json(post);
    } catch (e) {
        res.status(400).json({ error: " Impossible de modifier ce post" })
    }
}

exports.delete = async (req, res, next) => {
    try {
        let post = await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(201).json(post)
    } catch (e) {
        res.status(400).json({ error: 'Impossible de supprimer ce post' })
    }
}