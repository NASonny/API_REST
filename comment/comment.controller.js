const Comment = require("comment.model")

exports.createcom = async(req, res, next) => {
    try{
        let comments = await Comment.createcom({
            comment: req.body.comment
        });
        res.status(201).json(comments)
    }catch(e){
        res.status(400).json({error: e});
    }
}

exports