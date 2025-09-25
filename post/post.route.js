const express = require('express');
const router = express.Router();
const commentController = require("../comment/comment.controller.js")

const postController = require('./post.controller');
const checkPost = require("./checkPost.middleware.js")
const limiter = require('../middleware/ratelimiter.middleware.js');
const auth = require("../auth/auth.middleware.js")
const multerMiddleware = require('../middleware/multer.middleware');

//Récupération
router.get('/', limiter, postController.GetAll);
router.get('/:id', limiter, postController.GetById);

//Création
router.post('/', auth, multerMiddleware, postController.Create);

//Modification
router.put('/:id', auth, auth, postController.Update);

//Suppression
router.delete('/:id', auth, checkPost, postController.Delete);


router.post('/:id/comments',auth, limiter,commentController.createcom)

router.get('/:id/comments',commentController.getById)

router.put('/:id',auth, limiter, commentController.update)

router.delete('/:id', auth, limiter, commentController.delete)

module.exports = router;