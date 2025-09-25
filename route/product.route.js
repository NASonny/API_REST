const express = require('express')
const router = express.Router();
const productController = require("../controller/product.controller")
const checkProduct = require("../middleware/checkProduct.middleware")
const limiter = require('../middleware/ratelimiter.middleware.js');
const auth = require("../middleware/auth.js")
const multerMiddleware = require('../middleware/multer.middleware');

router.get('/', productController.getAll)

router.get('/:id', limiter,productController.getById)

router.post('/', auth,multerMiddleware,productController.create)

router.put('/:id', auth,productController.update)

router.delete('/:id', auth,checkProduct,productController.delete)

module.exports = router

