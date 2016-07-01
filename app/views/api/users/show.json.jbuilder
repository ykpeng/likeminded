json.extract! @user, :id, :username, :zipcode, :birthday, :looking_for, :img_url

json.profile_sections do
  json.array! (@user.profile_sections.order(:id)) do |profile_section|
    json.extract! profile_section, :id, :user_id, :section, :content
  end
end
