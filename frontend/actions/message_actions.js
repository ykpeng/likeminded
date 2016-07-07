const MessageApiUtil = require('../util/message_api_util');
const Dispatcher = require('../dispatcher/dispatcher');
const MessageConstants = require('../constants/message_constants');

const MessageActions = {
  fetchMessages(id){
    console.log("inside fetch messages");
    MessageApiUtil.fetchMessages(id, this.receiveMessages);
  },
  createMessage(formData) {
    console.log("inside create message");
    MessageApiUtil.createMessage(formData, this.receiveSingleMessage)
  },
  deleteMessages(id) {
    MessageApiUtil.deleteMessages(id, this.removeMessages);
  },
  receiveMessages(messages){
    console.log("inside receive message", messages);
    Dispatcher.dispatch({
      actionType: MessageConstants.MESSAGES_RECEIVED,
      messages: messages
    })
  },
  receiveSingleMessage(message){
    console.log("inside receive single message", message);
    Dispatcher.dispatch({
      actionType: MessageConstants.MESSAGE_RECEIVED,
      message: message
    })
  },
  removeMessages(messages) {
    Dispatcher.dispatch({
      actionType: MessageConstants.MESSAGES_REMOVED,
      messages: messages
    })
  }
};

module.exports = MessageActions;
