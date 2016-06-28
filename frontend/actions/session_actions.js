const SessionApiUtil = require('../util/session_api_util');
const Dispatcher = require('../dispatcher/dispatcher');
const hashHistory = require('react-router').hashHistory;
const SessionConstants = require('../constants/session_constants');
const ErrorActions = require('../actions/error_actions');

const SessionActions = {
  signup(formData){
    SessionApiUtil.signup(formData, this.receiveCurrentUser, ErrorActions.setErrors);
  },
  login(formData){
    SessionApiUtil.login(formData, this.receiveCurrentUser, ErrorActions.setErrors);
  },
  logout(){
    SessionApiUtil.logout(this.removeCurrentUser);
  },
  receiveCurrentUser(currentUser){
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    })
  },
  removeCurrentUser(){
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGOUT,
    })
    hashHistory.push('/login');
  }
};

module.exports = SessionActions;
