const express = require('express');
const router = express.Router();
const userController = require('../user/user.controller');

router.get('/:id', userController.getById);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;