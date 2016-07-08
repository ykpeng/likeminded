json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.age user.age
  json.city user.city
  json.state user.state
  json.img_url user.img_url || "http://res.cloudinary.com/ddm1q6utc/image/upload/v1467682125/default-profile-photo_w9qswu.png"
  json.looking_for user.looking_for
  json.match_percentage current_user.match_percentage(user)
end
