const express = require('express');
const userRoute = require("./user/user.route");
const postRoute = require('./post/post.route');
const authRoute = require('./auth/auth.route');
require('./model/index')
const relate = require("./model/relation");
const path = require("path");
const app = express();

relate();

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, "images")));
app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/post', postRoute)


module.exports = app;


