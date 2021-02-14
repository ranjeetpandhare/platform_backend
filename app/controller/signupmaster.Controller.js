const SignupmasterModel = require("../models/signupmaster.model");

//get all question List 
exports.getSignList = (req, res) => {

    SignupmasterModel.getSignList((err, signupmaster) => {
        if (err)
            res.send(err);
        res.send(signupmaster);
    })
}
exports.getSignById = (req, res) => {
    console.log("controller id " + req.params.id);
    SignupmasterModel.getSignById(req.params.id, (err, signupmaster) => {
        if (err)
            res.send(err)
        res.send(signupmaster);
    })
}

// create New question and insert new question record into database
exports.createSignupNew = (req, res) => {
    console.log("New user Signed in.... ")
    SignupmasterModel.createSignupNew(req.body, (err, signupmaster) => {
        if (err)
            res.send(err)
        res.send(signupmaster);

    });
}
