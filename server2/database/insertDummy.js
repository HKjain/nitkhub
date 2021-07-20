const con = require("./initialize")
const bcrypt = require("bcrypt")
const users = () => {

    const base_query = "insert into users set ?"

    const p1 = bcrypt.hashSync("hkjain@123", 12)
    const u1 = { email: 'harsh@gmail.com', first_name: 'Harsh', last_name: 'Kawadia', password: p1, phone: '9016145342', gender: 'Male' }

    con.query(base_query, u1, (err, result) => {
        if (err) throw err
    })

    const p2 = bcrypt.hashSync("akmain@123", 12)
    const u2 = { email: 'akshat@gmail.com', first_name: 'Akshat', last_name: 'Main', password: p2, phone: '9988996655', gender: 'Male' }

    con.query(base_query, u2, (err, result) => {
        if (err) throw err
    })

    const p3 = bcrypt.hashSync("mkdua@542", 12)
    const u3 = { email: 'mayank@gmail.com', first_name: 'Mayank', last_name: 'Dua', password: p3, phone: '9685875469', gender: 'Male' }

    con.query(base_query, u3, (err, result) => {
        if (err) throw err
    })

    const p4 = bcrypt.hashSync("kkaur@123", 12)
    const u4 = { email: 'kiran@gmail.com', first_name: 'Kiran', last_name: 'Kaur', password: p4, phone: '9887456854', gender: 'Female' }

    con.query(base_query, u4, (err, result) => {
        if (err) throw err
    })

    const p5 = bcrypt.hashSync("ajindani@12345", 12)
    const u5 = { email: 'arshi@gmail.com', first_name: 'Arshi', last_name: 'Jindani', password: p5, phone: '9989964874', gender: 'Female' }

    con.query(base_query, u5, (err, result) => {
        if (err) throw err
    })

    console.log("Dummy Users created!")
}

users()