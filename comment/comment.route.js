const express = require('express')
const router = express.Router();
const commentController = require("./comment.controller")
const limiter = require('../middleware/ratelimiter.middleware.js');
const auth = require("../middleware/auth.js")

router.post('/posts/:id/comments',auth, limiter,commentController.createcom)

router.get('/posts/:id/comments',commentController.getById)

router.put('/posts/:id',auth, limiter, commentController.update)

router.delete('/comments/:id', auth, limiter, commentController.delete)

module.exports = router