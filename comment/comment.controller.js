const Comment = require("./comment.model")

exports.createcom = async (req, res, next) => {
    try {
        let comments = await Comment.create({
            comment: req.body.comment
        });
        res.status(201).json(comments);
    } catch (e) {
        res.status(400).json({ error: e });
    }
}

exports.getById = async (req, res) => {
    try {
        let comments = await Comment.findAll({
            where: {
                postId: req.params.id
            }
        });
        res.status(200).json(comments);
    } catch (e) {
        res.status(400).json({ error: "impossible de récupérer les posts" });
    }
}

exports.update = async (req, res, next) => {
    try {
        let comments = await Comment.findOne({
            where: {
                id: req.params.id
            }
        });
        if (req.token.id !== comments.userId) {
            return res.status(403).json({ error: "Vous n'avez pas les autorisations pour modifier le post" })
        }
        if (req.body.comment) {
            comments.comment = req.body.comment;
        }
        await comments.save();
        res.status(201).json(comments);
    } catch (e) {
        res.status(400).json({ error: "Impossible de modifier ce commentaire" })
    }
}

exports.delete = async (req, res, next) => {
    try {
        let comments = await Comment.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(201).json(comments);
    } catch (e) {
        res.status(400).json({ error: "Ce compte existe déjà." });
    }
}
