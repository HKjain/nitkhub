const express = require('express')
const router = express.Router()
const { Users } = require('../models')
const bcrypt = require('bcrypt')
const { validateToken } = require('../middlewares/AuthMiddleware')

const { sign } = require('jsonwebtoken')

router.post('/register', async (req, res) => {
    const { first_name, last_name, gender, email, password } = req.body
    bcrypt.hash(password, 12).then(async (hash) => {

        const user = await Users.findAll({
            where: {
                email: email
            }
        })
        if (user.length >= 1) {
            res.json({ error: "User Already Exists!" })
        }
        else {
            await Users.create({
                email: email,
                first_name: first_name,
                last_name: last_name,
                gender: gender,
                password: hash
            })
            res.json({ message: "Successfully created User!" })
            res.status(200)
        }
    })
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body

    const user = await Users.findOne({ where: { email: email } })

    if (!user) res.json({ error: "User not Registered!!" })
    else {
        bcrypt.compare(password, user.password).then((valid) => {
            if (!valid)
                res.json({ error: "Invalid Credentials!!" })
            else {
                const token = sign({ email: user.email, id: user.id, first_name: user.first_name, last_name: user.last_name }, "secret")
                res.json({ message: "Login Successfull!!", token: token, user_info: user })
            }

        })
    }

})

router.get('/user', validateToken, (req, res) => {
    res.json(req.user)
})

module.exports = router