class Conversation < ActiveRecord::Base
  has_many :messages, dependent: :destroy
  accepts_nested_attributes_for :messages

  has_many :receivers,
    through: :messages,
    source: :receiver

  has_many :senders,
    through: :messages,
    source: :sender
end
