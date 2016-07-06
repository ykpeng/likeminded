const ConversationApiUtil = {
  fetchConversations(cb){
    $.ajax({
      url: "api/conversations",
      dataType: "json",
      success(response){
        cb(response);
      }
    });
  },
  fetchSingleConversation(id, cb){
    $.ajax({
      url: `api/conversations/${id}`,
      dataType: "json",
      success(response){
        cb(response);
      }
    });
  },
  deleteConversation(id, cb) {
    $.ajax({
      url: `api/conversations/${id}`,
      method: "DELETE",
      data: { id: id },
      dataType: "json",
      success(response){
        cb(response);
      }
    });
  },
  createConversation(conversation, cb) {
    $.ajax({
      url: `api/conversations/`,
      method: "POST",
      data: conversation,
      dataType: "json",
      success(response){
        cb(response);
      }
    });
  }
};

module.exports = ConversationApiUtil
