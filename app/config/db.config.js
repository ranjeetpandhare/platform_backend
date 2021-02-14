// ////////////////////////////////////////////////////////////////offline database is used
// const mysql = require("mysql");

// // Create a connection to the database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'question_answer_master_new'
// });

// // open the MySQL connection
// connection.connect(error => {
//     if (error) throw error;
//     console.log("Successfully connected to the database.");
// });

// module.exports = connection;

// ////////////////////////////////////////////////////////////////online database is used

const mysql = require("mysql2");


const connection = mysql.createConnection({
    host: "sql12.freemysqlhosting.net",
    user: "sql12392790",
    password: "HQ6FYuhePf",
    database: "sql12392790",
    port: 3306
})
connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
});



module.exports = connection;