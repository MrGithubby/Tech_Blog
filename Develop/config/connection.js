//Import Sequelize
const Sequelize = require('sequelize');
// Utilizes the dotenv package in order to load the .env filee and set environment variables
require('dotenv').config();

let sequelize;

if (process.env.DB_URL) {       //Note that we are using DB_URL for an app that is deployed
    sequelize = new Sequelize(process.env.DB_URL)
} else {
    sequelize = new Sequelize (     // If there isn't a deployed URL, then grab from the local database
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'postgres'
        }
    ); 
}

module.exports = sequelize;