class Message < ActiveRecord::Base
  validates :content, :sender_id, :receiver_id, presence: true
  validates :conversation, presence: true

  belongs_to :conversation, inverse_of: :messages

  belongs_to :sender,
  foreign_key: :sender_id,
  primary_key: :id,
  class_name: :User

  belongs_to :receiver,
  foreign_key: :receiver_id,
  primary_key: :id,
  class_name: :User
end
