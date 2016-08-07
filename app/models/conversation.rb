class Conversation < ActiveRecord::Base
  has_many :messages, dependent: :destroy, inverse_of: :conversation

  accepts_nested_attributes_for :messages

  has_many :receivers,
    through: :messages,
    source: :receiver

  has_many :senders,
    through: :messages,
    source: :sender

  def last_message
    self.messages.order(created_at: :desc).limit(1)[0]
  end
end
