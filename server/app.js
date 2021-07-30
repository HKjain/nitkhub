const express = require('express')
const dotenv = require('dotenv')
const passport = require('passport')
const session = require('express-session')
const cors = require('cors')

// getting config
dotenv.config({ path: './config/config.env' })

//config for passport
require('./config/passport')(passport)

const sequelize = require('./config/db')

const app = express()
app.use(cors({
    origin: '*'
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

// Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

//routing
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} on http://localhost:${PORT}`)
})
