const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors({
    origin: '*'
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = require('./models')

//Routers
const authRouter = require('./routes/Auth')
app.use("/auth", authRouter)

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server running on port 3001')
    })
})