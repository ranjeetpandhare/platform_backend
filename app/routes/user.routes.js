const express = require("express");
const router = express.Router();

//User master controller
const userController = require("../controller/usermaster.controller");

// UserMaster Routes

//get all record 
router.get("/", userController.getUserList);
//get single record
router.get('/:id', userController.getUserById);
// create record using post method
router.post('/', userController.createNewUser);


module.exports = router