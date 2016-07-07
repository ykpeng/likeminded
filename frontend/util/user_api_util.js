const UserApiUtil = {
  fetchUsers(cb){
    $.ajax({
      url: `api/users`,
      dataType: "json",
      success(response){
        cb(response);
      }
    })
  },

  fetchSingleUser(id, cb){
    $.ajax({
      url: `api/users/${id}`,
      dataType: "json",
      success(response){
        cb(response);
      }
    })
  },

  updateUser(id, formData, cb){
    $.ajax({
      url: `api/users/${id}`,
      method: "PATCH",
      data: { user: formData },
      success(response){
        cb(response);
      }
    })
  }
};

module.exports = UserApiUtil;
