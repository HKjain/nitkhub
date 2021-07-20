const Sequelize = require('sequelize')

const connectDB = async () => {
    const sequelize = new Sequelize(process.env.DB_DATABASE_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        dialect: 'mysql',
        host: process.env.DB_HOST
    })

    try {
        await sequelize.authenticate()
        console.log('Connection Successful!!')
    }
    catch (error) {
        console.log('Connection failed!!')
    }
}

module.exports = connectDB