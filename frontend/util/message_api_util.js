const MessageApiUtil = {
  fetchMessages(id, cb){
    console.log("inside api fetch message");
    $.ajax({
      url: `api/conversations/${id}/messages`,
      dataType: "json",
      success(response){
        cb(response);
      }
    });
  },
  createMessage(formData, cb){
    console.log("inside api create message");
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
  // deleteMessages(id, cb) {
  //   console.log("inside api delete message");
  //   $.ajax({
  //     url: `api/conversations/${id}/messages/`,
  //     dataType: "json",
  //     method: "DELETE",
  //     success(response){
  //       cb(response);
  //     }
  //   });
  // }
};

module.exports = MessageApiUtil;
