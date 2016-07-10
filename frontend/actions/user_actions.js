const UserApiUtil = require('../util/user_api_util');
const Dispatcher = require('../dispatcher/dispatcher');
const UserConstants = require('../constants/user_constants');

const UserActions = {
  fetchUsers(params){
    UserApiUtil.fetchUsers(params, this.receiveUsers);
  },

  fetchSingleUser(id){
    UserApiUtil.fetchSingleUser(id, this.receiveSingleUser);
  },

  updateUser(id, formData){
    UserApiUtil.updateUser(id, formData, this.receiveUpdatedUser);
  },

  receiveUsers(users){
    Dispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      users: users
    })
  },

  receiveSingleUser(user){
    Dispatcher.dispatch({
      actionType: UserConstants.USER_RECEIVED,
      user: user
    })
  },

  receiveUpdatedUser(user){
    Dispatcher.dispatch({
      actionType: UserConstants.USER_UPDATED,
      user: user
    })
  }
};

module.exports = UserActions;
