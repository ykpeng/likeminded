class Conversation < ActiveRecord::Base
  has_many :messages

  has_many :receivers,
  through: :messages,
  source: :receiver

  has_many :senders,
  through: :messages,
  source: :sender
end
