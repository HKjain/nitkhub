const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', (req, res) => {
    res.redirect('http://localhost:3000')
})

router.get('/home', ensureAuth, (req, res) => {
    console.log(req.user)
    console.log('Helllo')
    res.redirect('http://localhost:3000/home')
})

router.get('/login', ensureGuest, (req, res) => {
    res.redirect('http://localhost:3000/login')
})

router.get('/register', ensureGuest, (req, res) => {
    res.redirect('http://localhost:3000/register')
})
module.exports = router