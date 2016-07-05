const Store = require('flux/utils').Store;
const Dispatcher = require('../dispatcher/dispatcher');
const ConversationConstants = require('../constants/conversation_constants');

const ConversationStore = new Store(Dispatcher);

let _conversations = {};

const resetConversations = function(conversations){
  _conversations = {};
  conversations.forEach((conversation)=>{
    _conversations[conversation.id] = conversation;
  })
};

const setConversation = function(conversation){
  _conversations[conversation.id] = conversation;
};

const removeConversation = function(conversation){
  delete _conversations[conversation.id]
}

ConversationStore.all = function(){
  const conversations = [];
  for (let id in _conversations) {
    if (_conversations.hasOwnProperty(id)) {
      conversations.push(_conversations[id]);
    }
  };
  return conversations;
};

ConversationStore.find = function(id){
  return _conversations[id];
};

ConversationStore.__onDispatch = function(payload){
  switch (payload.actionType) {
    case ConversationConstants.CONVERSATIONS_RECEIVED:
      resetConversations(payload.conversations);
      this.__emitChange();
      break;
    case ConversationConstants.CONVERSATION_RECEIVED:
      setConversation(payload.conversation);
      this.__emitChange();
      break;
    case ConversationConstants.CONVERSATION_REMOVED:
      removeConversation(payload.conversation);
      this.__emitChange();
  }
}
module.exports = ConversationStore;
