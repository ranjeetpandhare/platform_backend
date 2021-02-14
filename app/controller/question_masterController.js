
const Question_masterModel = require("../models/question_master.model");

//get all question List 
exports.getQuestionList = (req, res) => {
    Question_masterModel.getAllQuestion((err, question_master) => {
        if (err)
            res.send(err);
        res.send(question_master);
    })
}
//get all question answer list home page 
exports.getQuestionAnswerListHomepage = (req, res) => {
    Question_masterModel.getQuestionAnswerListHomepage((err, question_master) => {
        if (err)
            res.send(err);
        res.send(question_master);
    })
}

//get all question answer list
exports.getQuestionAnswerList = (req, res) => {
    Question_masterModel.getAllQuestionAnswer((err, question_master) => {
        if (err)
            res.send(err);
        res.send(question_master);
    })
}

//get single question ny id 
exports.getQuestionAnswerById = (req, res) => {
    console.log("controller id " + req.params.id);
    Question_masterModel.getQAById(req.params.id, (err, question_master) => {
        if (err)
            res.send(err)
        res.send(question_master);
    })
}


//create New question and insert new question record into database
exports.createNewQuestion = (req, res) => {
    console.log("Hello")
    console.log(req.body);
    Question_masterModel.createNewQuestion(req.body, (err, question_master) => {
        if (err)
            res.send(err)
        res.send(question_master);

    });
}