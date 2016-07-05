const ConversationApiUtil = require('../util/conversation_api_util');
const Dispatcher = require('../dispatcher/dispatcher');
const ConversationConstants = require('../constants/conversation_constants');

const ConversationActions = {
  fetchConversations(){
    ConversationApiUtil.fetchConversations(this.receiveConversations);
  },
  fetchSingleConversation(id){
    ConversationApiUtil.fetchSingleConversation(id, this.receiveSingleConversation)
  },
  receiveConversations(conversations){
    Dispatcher.dispatch({
      actionType: ConversationConstants.CONVERSATIONS_RECEIVED,
      conversations: conversations
    });
  },
  receiveSingleConversation(conversation){
    Dispatcher.dispatch({
      actionType: ConversationConstants.CONVERSATION_RECEIVED,
      conversation: conversation
    });
  }
};

module.exports = ConversationActions;
