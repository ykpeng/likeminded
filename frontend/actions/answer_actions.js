const UserActions = require('./user_actions');
const AnswerApiUtil = require('../util/answer_api_util');

const AnswerActions = {
  // createAnswer(answer){
  //   AnswerApiUtil.createAnswer(answer, UserActions.receiveSingleUser);
  // },

  updateAnswer(answer){
    AnswerApiUtil.updateAnswer(answer, UserActions.receiveSingleUser);
  }
}

module.exports = AnswerActions;
