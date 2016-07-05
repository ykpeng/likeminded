class Conversation < ActiveRecord::Base
  has_many :messages

  has_many :receivers,
  through: :messages,
  source: :receiver

  has_many :senders,
  through: :messages,
  source: :sender
  # 
  # def self.find_by_user_id(id)
  #   Conversation.joins()
  #   where("sender_id = ? OR receiver_id = ?", id, id)
  # end
end
