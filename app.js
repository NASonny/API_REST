const express = require('express');
const userRoute = require("./user/user.route");
//const productRoute = require("./route/product.route");
require('./model/index')
const relate =  require("./model/relation");
const path = require("path");
const app = express();

relate();

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, "images")));
app.use('/user', userRoute);
app.use('/product', productRoute);

module.exports = app;


