const Product = require("../model/product.model")

exports.getAll = async (req,res) => {
    try{
        let productList = await Product.findAll()
        res.status(200).json(productList)
    }catch(e){
        res.status(400).json({error: "Impossible de récupérer les utilisateurs"})
    }
}

exports.getById = async (req,res) => {
    try{
        let product = await Product.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(product)
    }catch(e){
        res.status(400).json({error: "Impossible de récupérer les utilisateurs"})
    }
}

exports.create = async (req,res,next) => {
    try{
        let product = await Product.create({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price
        });
        res.status(201).json(product)
    }catch(e){
        res.status(400).json({error: e});
    }
}

exports.update = async (req, res, next) => {
    try {
        let product = await Product.findOne({
            where: {
                id: req.params.id
            }
        });
        if(req.token.id !== product.userId){
            return res.status(403).json({error: "Vous n'avez pas les autorisation pour modifier ce produit."});
        }
        if(req.body.name){
            product.name = req.body.name;
        }
        if(req.body.description){
            product.description = req.body.description;
        }
        if(req.body.price){
            product.price = req.body.price;
        }
        product.save();
        res.status(201).json(product);
    } catch (e) {
        res.status(400).json({ error: "Impossible de modifier ce produit" })
    }
}


exports.delete = async (req,res,next) => {
    try{
        let product = await Product.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(201).json(product)
    }catch(e){
        res.status(400).json({error: "Ce compte existe déjà."});
    }
}


