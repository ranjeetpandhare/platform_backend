var dbConn = require("../config/db.config");


var User = function (usermaster) {
    this.userId = usermaster.userId;
    this.userName = usermaster.userName;
    this.password = usermaster.password;
}

User.getAllUser = (result) => {
    dbConn.query(`SELECT * FROM usermaster`, (err, res) => {
        if (err) {
            console.log("error while");
            result(null, err);
        }
        else {
            console.log("user fetched successfully")
            result(null, res);
        }
    })
}

User.getUserById = (id, result) => {
    console.log("model id" + id);
    const sql = `SELECT * FROM usermaster WHERE userName=?`;
    dbConn.query(sql, id, (err, res) => {
        console.log("model");
        if (err) {
            console.log("error while fectching by id record", err);
            result(null, err);
        } else {
            result(null, res)
        }
    })
}

User.createNewUser = (userReqData, result) => {
    dbConn.query("INSERT INTO usermaster SET ? ", userReqData, (err, res) => {
        if (err) {
            console.log("error while inserting data")
            result(null, err);
        } else {
            console.log("User Created Successfully..")
            result(null, res);
        }
    })

}


module.exports = User;