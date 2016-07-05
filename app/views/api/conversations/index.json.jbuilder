json.array! @conversations do |conversation|
  json.extract! conversation, :id
  json.last_message conversation.messages.order(:created_at).last, :id, :sender_id, :receiver_id, :content, :created_at
end
