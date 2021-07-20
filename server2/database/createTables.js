const con = require("./initialize")

const createTables = () => {
    // --> users table
    const createUsers = `create table users(
    user_id int auto_increment primary key,
    email varchar(255) unique not null,
    first_name varchar(255) not null,
    last_name varchar(255),
    password mediumtext not null,
    phone varchar(10),
    gender varchar(10) not null,
    created_on datetime not null default current_timestamp
    )`
    con.query(createUsers, (errors, result) => {
        if (errors) throw errors
        console.log("Users table created successfully!")
    })
    //end users table
}

const checkTables = () => {
    const quer = "show tables"
    con.query(quer, (err, result) => {
        if (err) throw err
        if (result.length === 0)
            createTables()
    })
}

checkTables()

console.log("Ran Create Tables")