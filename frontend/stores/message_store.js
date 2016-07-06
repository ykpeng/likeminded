const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const MessageConstants = require('../constants/message_constants');

const MessageStore = new Store(Dispatcher);

let _messages = {};

const resetMessages = function(messages){
  _messages = {};
  messages.forEach((message)=>{
    _messages[message.id] = message;
  })
};

const setMessage = function(message){
  _messages[message.id] = message;
};

const removeMessage = function(message){
  delete _messages[message.id]
}

MessageStore.all = function(){
  const messages = [];
  for (let id in _messages) {
    if (_messages.hasOwnProperty(id)) {
      messages.push(_messages[id]);
    }
  };
  return messages;
};

MessageStore.find = function(id){
  return _messages[id];
};

MessageStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case MessageConstants.MESSAGES_RECEIVED:
      resetMessages(payload.messages);
      this.__emitChange();
      break;
    case MessageConstants.MESSAGE_RECEIVED:
      setMessage(payload.message);
      this.__emitChange();
      break;
    case MessageConstants.MESSAGE_REMOVED:
      removeMessage(payload.message);
      this.__emitChange();
  }
};

module.exports = MessageStore;
