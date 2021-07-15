const express = require('express')
const port = 3001
const cors = require('cors')
const app = express()
const bcrypt = require('bcrypt')

app.use(cors({
    origin: '*'
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const con = require("./database/initialize")

app.post("/api/register", (req, res) => {

    const formData = req.body.formData
    const password = bcrypt.hashSync(formData.password, 12)
    formData.password = password

    con.query("select * from users where email=?", formData.email, (errs, result) => {
        const len = result.length

        if (errs)
            res.send({ message: 'Server not running properly!' })
        if (len > 0) {
            res.status(406).send({ message: 'User already Exists' })
        }
        else {
            const sql = "insert into users set ?"
            con.query(sql, formData, (err, results) => {
                if (!err) {
                    res.status(201).send({ message: 'Successfully Added User!' })
                }
                else
                    res.status(406).send({ message: 'Server Error!' })
            })
        }

    })




})

app.listen(port, () => {
    console.log(`Server running on http://www.localhost:${port}`)
})