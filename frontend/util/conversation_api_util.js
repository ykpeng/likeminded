const ConversationApiUtil = {
  fetchConversations(cb){
    $.ajax({
      url: "api/conversations",
      dataType: "json",
      success(response){
        cb(response)
      }
    });
  },
  fetchSingleConversation(id, cb){
    $.ajax({
      url: `api/conversations/${id}`,
      dataType: "json",
      success(response){
        cb(response)
      }
    });
  }
};

module.exports = ConversationApiUtil
