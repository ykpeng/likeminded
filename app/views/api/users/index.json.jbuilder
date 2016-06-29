json.array! @users do |user|
  json.extract! user, :id, :username, :birthday, :zipcode, :img_url
end
