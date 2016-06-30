const SessionApiUtil = {
  signup(user, success, error){
    console.log(user);
    $.ajax({
      url: 'api/users',
      method: "POST",
      dataType: "json",
      data: { user },
      success,
      error(xhr) {
				const errors = xhr.responseJSON;
				error("signup", errors);
			}
    });
  },

  login(user, success, error){
    $.ajax({
      url: 'api/session',
      method: "POST",
      dataType: "json",
      data: { user },
      success,
      error(xhr) {
				const errors = xhr.responseJSON;
				error("login", errors);
			}
    });
  },

  logout(success){
    $.ajax({
      url: 'api/session',
      method: "DELETE",
      success,
      error: function () {
        console.log("Logout error in SessionApiUtil#logout");
      }
    });
  }
};

module.exports = SessionApiUtil;
