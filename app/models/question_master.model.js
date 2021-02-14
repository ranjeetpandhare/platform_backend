var dbConn = require("../config/db.config");


var Question_master = function (question_master) {
    this.userId = question_master.userId;
    this.qId = question_master.qId;
    this.qText = question_master.qText;
    this.postedAt = question_master.postedAt;
}

Question_master.getAllQuestion = (result) => {
    dbConn.query("SELECT * FROM question_master", (err, res) => {
        if (err) {
            console.log("error while fetching data of user");
            result(null, err);
        }
        else {
            console.log("Question  fetched successfully")
            result(null, res);
        }
    })
}
//getQuestionAnswerListHomepage

Question_master.getQuestionAnswerListHomepage = (result) => {


    dbConn.query("select q.qText,s.userName,a.ansText from signupmaster s inner join question_master q on s.userId=q.userId left join answer_master a on q.qId=a.qId;", (err, res) => {
        if (err) {
            console.log("error while fetching data of user");
            result(null, err);
        }
        else {
            console.log("Question  fetched successfully");
            result(null, res);
        }
    })
}

Question_master.getAllQuestionAnswer = (result) => {
    dbConn.query("select s.userId,s.userName,q.qId,q.qText,a.ansText,a.ansId from signupmaster s ,question_master q left join answer_master a on q.qId=a.qId group by q.qId ;", (err, res) => {
        if (err) {
            console.log("error while fetching data of user");
            result(null, err);
        }
        else {
            console.log("Question  fetched successfully");
            result(null, res);
        }
    })
}
Question_master.getQAById = (id, result) => {
    const sql = "select q.qId,s.userName,qText,ansText,q.postedAt from question_master q left join answer_master a inner join signupmaster s on a.userId=s.userId on  q.qId=a.qId where a.qId=?;";
    dbConn.query(sql, id, (err, res) => {
        if (err) {
            console.log("error while fectching by id record", err);
            result(null, err);
        } else {
            result(null, res)
        }
    })
}

Question_master.createNewQuestion = (QuestionReqData, result) => {
    console.log(QuestionReqData)
    dbConn.query("INSERT INTO question_master SET ?;", QuestionReqData, (err, res) => {
        if (err) {
            console.log("error while inserting data new question ")
            result(null, err);
        } else {
            console.log("User Created Successfully..")
            result(null, res);
        }
    })

}


module.exports = Question_master;