const express = require('express');
const router = express.Router();
const userController = require('../user/user.controller');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;