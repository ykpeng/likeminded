const AnswerApiUtil = {
  updateAnswer(answer, cb) {
    $.ajax({
      url: `api/answers/${answer.id}`,
      method: "PATCH",
      dataType: "json",
      data: { answer: answer },
      success(response){
        cb(response);
      }
    })
  }
};

module.exports = AnswerApiUtil;
