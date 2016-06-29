const ProfileSectionApiUtil = {
  updateProfileSection(formData, cb){
    $.ajax({
      url: `api/profile_sections/${formData.id}`,
      method: "PATCH",
      dataType: "json",
      data: { profile_section: { user_id: formData.user_id, section: formData.section, content: formData.content } },
      success(response){
        cb(response)
      }
    })
  }
};

module.exports = ProfileSectionApiUtil;
