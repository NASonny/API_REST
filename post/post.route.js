const express = require('express');
const router = express.Router();
const postController = require('./post.controller');
const checkPost = require("./checkPost.middleware.js")
const limiter = require('../middleware/ratelimiter.middleware.js');
const auth = require("../auth/auth.middleware.js")
const multerMiddleware = require('../middleware/multer.middleware');

//Récupération
router.get('/', limiter, postController.GetAll);
router.get('/:id', limiter, postController.GetById);

//Création
router.post('/', multerMiddleware, postController.Create);

//Modification
router.put('/:id', auth, postController.Update);

//Suppression
router.delete('/:id', auth, checkPost, postController.Delete);

module.exports = router;