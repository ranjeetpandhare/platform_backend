const express = require("express");
const signuprouter = express.Router();

//signup mastter controller 
const SignupController = require("../controller/signupmaster.Controller")

// signup Routes

//get all record 
signuprouter.get("/", SignupController.getSignList);
// create record using post method
signuprouter.get("/:id", SignupController.getSignById);

signuprouter.post('/', SignupController.createSignupNew);


module.exports = signuprouter