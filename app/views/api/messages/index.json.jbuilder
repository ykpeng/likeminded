json.array! @messages do |message|
  json.id message.id
  json.conversation_id message.conversation_id
  json.sender do
    json.id message.sender.id
    json.username message.sender.username
    json.age message.sender.age
    json.city message.sender.city
    json.state message.sender.state
    json.img_url message.sender.img_url || "https://res.cloudinary.com/ddm1q6utc/image/upload/v1467682125/default-profile-photo_w9qswu.png"
  end
  json.receiver do
    json.id message.receiver.id
    json.username message.receiver.username
    json.age message.receiver.age
    json.city message.receiver.city
    json.state message.sender.state
    json.img_url message.receiver.img_url || "https://res.cloudinary.com/ddm1q6utc/image/upload/v1467682125/default-profile-photo_w9qswu.png"
  end
  json.content message.content
  json.time_ago time_ago_in_words(message.created_at)
end
