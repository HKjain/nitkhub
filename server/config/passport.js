const GoogleStrategy = require('passport-google-oauth20').Strategy
const User = require('../models/User')
const sequelize = require('../config/db')
const { QueryTypes } = require('sequelize')


module.exports = (passport) => {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback"
    },
        async (accessToken, refreshToken, profile, cb) => {

            const aUser = {
                googleID: profile.id,
                first_name: profile.name.givenName,
                last_name: profile.name.familyName ? profile.name.familyName : null,
                image: profile.photos[0].value
            }

            try {
                const users = await sequelize.query("select * from users where googleID=:gID", { type: QueryTypes.SELECT, replacements: { gID: aUser.googleID } })

                if (users.length === 0) {
                    // const [results, metadata] = sequelize.query("insert into users(googleID, first_name, last_name, image)values(:gID, :fn, :ln, :img) ", {
                    //     type: QueryTypes.INSERT,
                    //     replacements: { gID: aUser.googleID, fn: aUser.first_name, ln: aUser.last_name, img: aUser.image }
                    // })
                    const ur = await User.create(aUser)
                    cb(null, ur)

                } else {
                    const user = users[0]
                    cb(null, user)
                }


            } catch (er) {
                console.error(er)
            }
        }
    ))

    passport.serializeUser((user, done) => {
        done(null, user.googleID)
    }
    )

    passport.deserializeUser(async (id, done) => {
        const user = await User.findOne({ where: { googleID: id } })
        done(null, user)
    }
    )

}