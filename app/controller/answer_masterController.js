
const Answer_masterModel = require("../models/answer_master.model");

//get all question List 
exports.getAnswerList = (req, res) => {

    Answer_masterModel.getAllAnswer((err, answer_master) => {
        if (err)
            res.send(err);
        res.send(answer_master);
    })
}
// create New question and insert new question record into database
exports.createNewAnswer = (req, res) => {
    console.log("Hello")
    Answer_masterModel.createNewAnswer(req.body, (err, answer_master) => {
        if (err)
            res.send(err)
        res.send(answer_master);

    });
}
