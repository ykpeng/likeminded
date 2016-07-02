const QuestionApiUtil = {
  fetchQuestions(cb){
    $.ajax({
      url: `api/questions`,
      dataType: "json",
      success(response){
        cb(response);
      }
    })
  },
};

module.exports = QuestionApiUtil;
