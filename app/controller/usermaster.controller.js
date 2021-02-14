const User = require("../models/usermaster.model");
const UserModel = require("../models/usermaster.model");

//get all userList 
exports.getUserList = (req, res) => {
    UserModel.getAllUser((err, usermaster) => {
        if (err)
            res.send(err);
        res.send(usermaster);
    })
}

//get single user 
exports.getUserById = (req, res) => {
    console.log("controller id" + req.params.id);
    UserModel.getUserById(req.params.id, (err, usermaster) => {
        if (err)
            res.send(err)
        res.send(usermaster);

    })
}

//create New user and insert record into database
exports.createNewUser = (req, res) => {
    UserModel.createNewUser(req.body, (err, usermaster) => {
        if (err)
            res.send(err)
        res.send(usermaster);

    });
}