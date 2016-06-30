json.extract! @user, :id, :username, :zipcode, :birthday, :looking_for, :img_url

json.profile_sections @user.profile_sections do |profile_section|
  json.id profile_section.id
  json.user_id profile_section.user_id
  json.section profile_section.section
  json.content profile_section.content
end
