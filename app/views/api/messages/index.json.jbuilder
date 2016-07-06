json.array! @messages do |message|
  json.id message.id
  json.conversation_id message.conversation_id
  json.sender message.sender
  json.receiver message.receiver
  json.content message.content
  json.time_ago time_ago_in_words(message.created_at)
end
