const {Model, DataTypes} = require('sequelize'); //Require the Model and Datatypes
const sequelize = require('../config/connection.js') //Require the connecction key for Sequelize

class Comments extends Model {};

Comments.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        content: {
            type: DataTypes.STRING,
            allownull: true,
        },
        blogPostId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id',
            },
        onDelete: 'CASCADE',
        }
    },
    {
        sequelize,
        timestamps: false, // By defaut Sequelize automatically creates CRERATEDAT and UPDATEDAT Fields in your code
        freezeTableName: true, //Sequelize automatically pluralizes the model name to generate the table name (model Project would create a table called Projects). 
        underscored: true, //this converts camelCased column names into snake case -- this would mean that createdAt would become created_at in the database
        modelName: 'comments', 
    }
);

module.exports = Comments