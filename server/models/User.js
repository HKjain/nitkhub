const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize(process.env.DB_DATABASE_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'mysql',
    host: process.env.DB_HOST
})

const User = sequelize.define('User', {
    googleID: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.TEXT,
    }
}, {
    updatedAt: false
})

module.exports = User