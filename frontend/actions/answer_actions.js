const UserActions = require('./user_actions');
const AnswerApiUtil = require('../util/answer_api_util');
const Dispatcher = require('../dispatcher/dispatcher');
const AnswerConstants = require('../constants/answer_constants');

const AnswerActions = {
  fetchAnswers() {
    AnswerApiUtil.fetchAnswers(this.receiveAnswers);
  },

  fetchSingleAnswer(id) {
    AnswerApiUtil.fetchSingleAnswer(id, this.receiveSingleAnswer);
  },

  createAnswer(answer) {
    AnswerApiUtil.createAnswer(answer, this.receiveSingleAnswer);
  },

  updateAnswer(answer) {
    AnswerApiUtil.updateAnswer(answer, this.receiveSingleAnswer);
  },

  receiveAnswers(answers) {
    Dispatcher.dispatch({
      actionType: AnswerConstants.ANSWERS_RECEIVED,
      answers: answers
    });
  },

  receiveSingleAnswer(answer) {
    Dispatcher.dispatch({
      actionType: AnswerConstants.ANSWER_RECEIVED,
      answer: answer
    });
  }
}

module.exports = AnswerActions;
