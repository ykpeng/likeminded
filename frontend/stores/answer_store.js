const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const AnswerConstants = require('../constants/answer_constants');

const AnswerStore = new Store(Dispatcher);

let _answers = {};

const resetAnswers = function(answers){
  _answers = {};
  answers.forEach((answer)=>{
    _answers[answer.id] = answer;
  })
};

const setAnswer = function(answer){
  _answers[answer.id] = answer;
};

AnswerStore.all = function(){
  const answers = [];
  for (let id in _answers) {
    if (_answers.hasOwnProperty(id)) {
      answers.push(_answers[id]);
    }
  };
  return answers;
};

AnswerStore.find = function(id){
  return _answers[id];
};

AnswerStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case AnswerConstants.ANSWERS_RECEIVED:
      resetAnswers(payload.answers);
      this.__emitChange();
      break;
    case AnswerConstants.ANSWER_RECEIVED:
      setAnswer(payload.answer);
      this.__emitChange();
      break;
  }
}
module.exports = AnswerStore;
