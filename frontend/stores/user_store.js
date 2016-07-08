const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const UserConstants = require('../constants/user_constants');

const UserStore = new Store(Dispatcher);

let _users = {};

const resetUsers = function(users){
  _users = {};
  users.forEach((user)=>{
    _users[user.id] = user;
  })
};

const setUser = function(user){
  _users[user.id] = user;
};

UserStore.all = function(){
  const users = [];
  for (let id in _users) {
    if (_users.hasOwnProperty(id)) {
      users.push(_users[id]);
    }
  }
  let sortedUsers = users.sort((a, b)=>{
    return b.match_percentage - a.match_percentage;
  })
  return sortedUsers;
};

UserStore.find = function(id){
  return _users[id];
};

UserStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case UserConstants.USERS_RECEIVED:
      resetUsers(payload.users);
      this.__emitChange();
      break;
    case UserConstants.USER_RECEIVED:
      setUser(payload.user);
      this.__emitChange();
      break;
  }
}
module.exports = UserStore;
