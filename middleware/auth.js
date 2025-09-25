require('dotenv').config()
const jwt = require('jsonwebtoken')
const auth = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    try{
        req.token = jwt.verify(token,process.env.JWT_KEY);
        next();
    } catch(e){
        // 403 forbidden 
        // 401 unauthorized
        res.status(401).json({error: "Vous devez être authentifié pour réaliser cela."});
    }
}

module.exports = auth;