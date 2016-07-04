json.extract! @user, :id, :username, :zipcode, :birthday, :looking_for, :img_url, :dim_scores

json.profile_sections do
  json.array! (@user.profile_sections.order(:id)) do |profile_section|
    json.extract! profile_section, :id, :user_id, :section, :content
  end
end

json.answers do
  json.array! (@user.answers) do |answer|
    json.extract! answer, :id, :question_id, :user_id, :created_at, :updated_at
  end
end
