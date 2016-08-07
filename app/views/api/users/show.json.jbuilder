json.id @user.id
json.username @user.username
json.age @user.age
json.city @user.city
json.state @user.state
json.img_url @user.img_url || "https://res.cloudinary.com/ddm1q6utc/image/upload/v1467682125/default-profile-photo_w9qswu.png"
json.looking_for @user.looking_for
json.dim_scores @user.dim_scores
json.completed @user.completed

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
