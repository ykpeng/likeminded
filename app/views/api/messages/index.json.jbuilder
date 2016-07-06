json.array! @messages do |message|
  json.extract! message, :id, :conversation_id, :sender, :receiver, :content, :created_at
end
