const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const QuestionConstants = require('../constants/question_constants');

const QuestionStore = new Store(Dispatcher);

let _questions = {};

QuestionStore.all = function(){
  let questions = [];
  for (let id in _questions) {
    if (_questions.hasOwnProperty(id)) {
      questions.push(_questions[id])
    }
  }
  return questions;
};

const resetQuestions = function(questions){
  _questions = {};
  questions.forEach((question)=>{
    _questions[question.id] = question;
  })
};

QuestionStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case QuestionConstants.QUESTIONS_RECEIVED:
      resetQuestions(payload.questions);
      this.__emitChange();
      break;
  }
};

module.exports = QuestionStore;
