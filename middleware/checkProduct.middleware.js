const Product = require('../model/product.model')

const checkProduct = async (req,res,next) => {
    let product = await Product.findOne({
        where:{
            id: req.params.id
        }
    });
    if (product) {
        next();
    } else {
        res.status(404).json({error: "Le produit n'existe pas"});
    }
}

module.exports = checkProduct;