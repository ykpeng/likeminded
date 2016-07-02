const QuestionApiUtil = require('../util/question_api_util');
const Dispatcher = require('../dispatcher/dispatcher');
const QuestionConstants = require('../constants/question_constants');

const QuestionActions = {
  fetchQuestions(){
    QuestionApiUtil.fetchQuestions(this.receiveQuestions);
  },

  receiveQuestions(questions){
    Dispatcher.dispatch({
      actionType: QuestionConstants.QUESTIONS_RECEIVED,
      questions: questions
    })
  }
};

module.exports = QuestionActions;
