var dbConn = require("../config/db.config");


var Answer_master = function (answer_master) {
    this.userId = answer_master.userId;
    this.qId = answer_master.qId;
    this.ansText = answer_master.qText;
    this.postedAt = answer_master.postedAt;
    this.ansId = answer_master.ansId;

}

Answer_master.getAllAnswer = (result) => {
    dbConn.query("SELECT * FROM answer_master", (err, res) => {
        if (err) {
            console.log("error while fetching data of answer");
            result(null, err);
        }
        else {
            console.log("Answer  fetched successfully")
            result(null, res);
        }
    })
}

Answer_master.createNewAnswer = (AnswerReqData, result) => {
    console.log(AnswerReqData);
    dbConn.query("INSERT INTO answer_master SET ? ", AnswerReqData, (err, res) => {
        if (err) {
            console.log("error while inserting answer")
            result(null, err);
        } else {
            console.log("answer Created Successfully..")
            result(null, res);
        }
    })

}


module.exports = Answer_master;