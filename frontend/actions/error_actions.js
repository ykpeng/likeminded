const Dispatcher = require('../dispatcher/dispatcher');
const ErrorConstants = require('../constants/error_constants');

const ErrorActions = {
  setErrors(form, errors){
    Dispatcher.dispatch({
      actionType: ErrorConstants.SET_ERRORS,
      form: form,
      errors: errors
    });
  },
  clearErrors(){
    Dispatcher.dispatch({
      actionType: ErrorConstants.CLEAR_ERRORS,
    });
  }
};

module.exports = ErrorActions;
