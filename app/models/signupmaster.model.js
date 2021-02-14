var dbConn = require("../config/db.config");


var Signupmaster = function (signupmaster) {
    this.fname = signupmaster.fname;
    this.lname = signupmaster.lname;
    this.userName = signupmaster.userName;
    this.email = signupmaster.email;
    this.phone = signupmaster.phone;
    this.address = signupmaster.address;
    this.password = signupmaster.password;
}

Signupmaster.getSignList = (result) => {
    dbConn.query("SELECT * FROM signupmaster", (err, res) => {
        if (err) {
            console.log("error while fetching data of answer");
            result(null, err);
        }
        else {
            console.log("signup form fetched data successfully")
            result(null, res);
        }
    })
}
Signupmaster.getSignById = (id, result) => {
    const sql = `SELECT * FROM signupmaster WHERE userName=?`;
    dbConn.query(sql, id, (err, res) => {
        if (err) {
            console.log("error while fectching by id record from sign up table ", err);
            result(null, err);
        } else {
            result(null, res)
        }
    })
}
Signupmaster.createSignupNew = (SignupReqData, result) => {
    console.log(SignupReqData);
    dbConn.query("INSERT INTO signupmaster SET ? ", SignupReqData, (err, res) => {
        if (err) {
            console.log("error while inserting signup form ")
            result(null, err);
        } else {
            console.log("new user Registerd Successfully..")
            result(null, res);
        }
    })
}


module.exports = Signupmaster;