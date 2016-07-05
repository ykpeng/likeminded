json.array! @conversations do |conversation|
  json.extract! conversation, :id
  json.last_message conversation.messages.order(:created_at).last, :id, :sender, :receiver, :content, :created_at
end
