json.array! @users do |user|
  json.extract! user, :id, :username, :birthday, :zipcode, :img_url, :looking_for
  json.match_percentage current_user.match_percentage(user)
end
