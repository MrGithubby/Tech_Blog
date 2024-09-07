const {Model, DataTypes} = require('sequelize'); //Require the Model and Datatypes
const sequelize = require('../config/connection.js') //Require the connecction key for Sequelize
const bcrypt = require('bcrypt');

class User extends Model {
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPw, this.password) //compares the given password wit the one here
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len:[6],
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (newUserData) => {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },
            beforeUpdate: async (updatedUserData) => {
                newUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            },            
        }
    },
    {
        sequelize,
        timestamps: false, // By defaut Sequelize automatically creates CRERATEDAT and UPDATEDAT Fields in your code
        freezeTableName: true, //Sequelize automatically pluralizes the model name to generate the table name (model Project would create a table called Projects). 
        underscored: true, //this converts camelCased column names into snake case -- this would mean that createdAt would become created_at in the database
        modelName: 'user', 
    }
);

module.exports = User