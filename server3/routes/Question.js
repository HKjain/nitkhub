const express = require('express')
const router = express.Router()
const { Questions } = require('../models')
// const bcrypt = require('bcrypt')
const { validateToken } = require('../middlewares/AuthMiddleware')

router.post('/post', validateToken, async (req, res) => {
    const { description } = req.body
    const newQuest = await Questions.create({
        description: description,
        UserId: req.user.id
    })
    res.json(newQuest)
})

module.exports = router