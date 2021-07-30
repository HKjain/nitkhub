const express = require('express')
const router = express.Router()
const passport = require('passport')

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }))

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/register' }), (req, res) => {
    res.redirect('http://localhost:3000/home')
})

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('http://localhost:3000')
})

module.exports = router