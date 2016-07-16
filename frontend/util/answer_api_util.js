const AnswerApiUtil = {
  fetchAnswers(cb){
    $.ajax({
      url: `api/answers/`,
      dataType: "json",
      method: "GET",
      success(response){
        cb(response);
      }
    })
  },

  createAnswer(answer, cb) {
    $.ajax({
      url: `api/answers/`,
      method: "POST",
      dataType: "json",
      data: { answer: answer },
      success(response){
        cb(response);
      }
    })
  },
  updateAnswer(answer, cb) {
    $.ajax({
      url: `api/answers/${answer.id}`,
      method: "PATCH",
      dataType: "json",
      data: {answer: { question_id: answer.question_id, answer_choice: answer.answer_choice }},
      success(response){
        cb(response);
      }
    })
  }
};

module.exports = AnswerApiUtil;
