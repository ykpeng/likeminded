const MessageApiUtil = {
  fetchMessages(id, cb){
    $.ajax({
      url: `api/conversations/${id}`,
      dataType: "json",
      success(response){
        cb(response);
      }
    });
  },
  createMessage(formData, cb){
    $.ajax({
      url: `api/conversations/messages/`,
      dataType: "json",
      method: "POST",
      data: { message: formData }
      success(response){
        cb(response);
      }
    });
  }
};

module.exports = MessageApiUtil;
