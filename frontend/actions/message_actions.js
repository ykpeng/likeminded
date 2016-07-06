const MessageApiUtil = require('../util/message_api_util');
const Dispatcher = require('../dispatcher/dispatcher');
const MessageConstants = require('../constants/message_constants');

const MessageActions = {
  fetchMessages(id){
    MessageApiUtil.fetchMessages(id, this.receiveMessages);
  },
  createMessage(formData) {
    MessageApiUtil.createMessage(formData, this.receiveSingleMessage)
  },
  receiveMessages(messages){
    Dispatcher.dispatch({
      actionType: MessageConstants.MESSAGES_RECEIVED,
      messages: messages
    })
  },
  receiveSingleMessage(message){
    Dispatcher.dispatch({
      actionType: MessageConstants.MESSAGE_RECEIVED,
      message: message
    })
  }
};

module.exports = MessageActions;
