const express = require('express')
const router = express.Router();
const commentController = require("./comment.controller")
const limiter = require('../middleware/ratelimiter.middleware.js');
const auth = require("../auth/auth.middleware.js")

router.post('/post/:id/comments',auth, limiter,commentController.createcom)

router.get('/post/:id/comments',commentController.getById)

router.put('/post/:id',auth, limiter, commentController.update)

router.delete('/comments/:id', auth, limiter, commentController.delete)

module.exports = router