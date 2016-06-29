const ProfileSectionApiUtil = require('../util/profile_section_api_util');
const UserActions = require('./user_actions');

const ProfileSectionActions = {
  updateProfileSection(formData){
    ProfileSectionApiUtil.updateProfileSection(formData, UserActions.receiveSingleUser);
  }
};

module.exports = ProfileSectionActions;
