const express = require("express");
const questionrouter = express.Router();

//question mastter controller 
const QuestionController = require("../controller/question_masterController")

// question_master Routes

//get all record 
questionrouter.get("/", QuestionController.getQuestionList);
// create record using post method
questionrouter.post('/add', QuestionController.createNewQuestion);


//get all question answer
questionrouter.get("/question_answer_list_homepage", QuestionController.getQuestionAnswerListHomepage);

questionrouter.get("/question_answer_list", QuestionController.getQuestionAnswerList);

questionrouter.get("/question_answer_list/:id", QuestionController.getQuestionAnswerById);


module.exports = questionrouter
