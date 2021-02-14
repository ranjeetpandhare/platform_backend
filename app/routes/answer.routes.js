const express = require("express");
const answerrouter = express.Router();

//question mastter controller 
const AnswerController = require("../controller/answer_masterController")

// question_master Routes

//get all record 
answerrouter.get("/", AnswerController.getAnswerList);
// create record using post method
answerrouter.post('/', AnswerController.createNewAnswer);


module.exports = answerrouter
