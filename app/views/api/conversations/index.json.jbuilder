json.array! @conversations do |conversation|
  json.extract! conversation, :id
  last_message = conversation.messages.order(:created_at).last
  json.last_message do
    json.id last_message.id
    json.sender last_message.sender
    json.receiver last_message.receiver
    json.content last_message.content
    json.time_ago time_ago_in_words(last_message.created_at)
  end
end
