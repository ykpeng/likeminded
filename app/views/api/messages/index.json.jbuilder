json.array! @messages do |message|
  json.id message.id
  json.conversation_id message.conversation_id
  sender = message.sender
  receiver = message.receiver
  json.sender do
    json.id sender.id
    json.username sender.username
    json.age sender.age
    json.city sender.city
    json.state sender.state
    json.looking_for sender.looking_for
    json.match_percentage receiver.match_percentage(sender)
    json.img_url sender.img_url || "https://res.cloudinary.com/ddm1q6utc/image/upload/v1467682125/default-profile-photo_w9qswu.png"
  end
  json.receiver do
    json.id receiver.id
    json.username receiver.username
    json.age receiver.age
    json.city receiver.city
    json.state receiver.state
    json.looking_for receiver.looking_for
    json.match_percentage receiver.match_percentage(sender)
    json.img_url receiver.img_url || "https://res.cloudinary.com/ddm1q6utc/image/upload/v1467682125/default-profile-photo_w9qswu.png"
  end
  json.content message.content
  json.time_ago time_ago_in_words(message.created_at)
end
