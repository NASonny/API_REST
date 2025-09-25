const express = require('express');
const router = express.Router();
const userController = require('../user/user.controller');

router.post('/register', userController.signin);
router.post('/login', userController.login);
router.get('/:id', userController.getById);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

module.exports = router;