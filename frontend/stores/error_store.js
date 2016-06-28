const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const ErrorConstants = require('../constants/error_constants');

const ErrorStore = new Store(Dispatcher);
let _errors = {};
let _form = "";

ErrorStore.formErrors = function (form) {
  if (form !== _form) {
    return {};
  }

  const result = {};
  for (let field in _errors) {
    result[field] = Array.from(_errors[field]);
  }

  return result;
};

ErrorStore.form = function(){
  return _form;
};

const setErrors = function(payload){
  _form = payload.form;
  _errors = payload.errors;
};

const clearErrors = function(){
  _form = "";
  _errors = {};
};

ErrorStore.__onDispatch = function (payload){
  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      setErrors(payload);
      this.__emitChange();
      break;
    case ErrorConstants.CLEAR_ERRORS:
      clearErrors();
      this.__emitChange();
      break;
  }
}

module.exports = ErrorStore;
