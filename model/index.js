require('dotenv').config();
const {Sequelize, Model} = require("sequelize");
const db = new Sequelize(process.env.DBNAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
})

db.authenticate()
.then(() => {
    console.log("Connexion DB OK");
})
.catch((e) => {
    console.error('Error occur:' + e.message)
})

module.exports = db