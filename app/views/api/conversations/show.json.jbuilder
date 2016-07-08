json.extract! @conversation, :id

# json.messages do
#   json.array! @conversation.messages do |message|
#     json.extract! message, :id, :conversation_id, :sender_id, :receiver_id, :content
#   end
# end

json.messages do
  json.array! @conversation.messages do |message|
    json.id message.id
    json.conversation_id message.conversation_id
    json.sender do
      json.id message.sender.id
      json.username message.sender.username
      json.age message.sender.age
      json.zipcode message.sender.zipcode
      json.img_url message.sender.img_url || "http://res.cloudinary.com/ddm1q6utc/image/upload/v1467682125/default-profile-photo_w9qswu.png"
    end
    json.receiver do
      json.id message.receiver.id
      json.username message.receiver.username
      json.age message.receiver.age
      json.zipcode message.receiver.zipcode
      json.img_url message.receiver.img_url || "http://res.cloudinary.com/ddm1q6utc/image/upload/v1467682125/default-profile-photo_w9qswu.png"
    end
    json.content message.content
    json.create_at message.created_at
    json.time_ago time_ago_in_words(message.created_at)
  end
end
