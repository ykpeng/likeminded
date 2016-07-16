const MessageApiUtil = {
  fetchMessages(id, cb){
    $.ajax({
      url: `api/conversations/${id}/messages`,
      dataType: "json",
      success(response){
        cb(response);
      }
    });
  },
  createMessage(formData, cb){
    $.ajax({
      url: `api/conversations/${formData.conversation_id}/messages/`,
      dataType: "json",
      method: "POST",
      data: { message: { receiver_id: formData.receiver_id, content: formData.content} },
      success(response){
        cb(response);
      }
    });
  },
};

module.exports = MessageApiUtil;
