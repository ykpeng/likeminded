class Question < ActiveRecord::Base
  validates :dimension_id, :content, presence: true
  validates :content, uniqueness: true

  belongs_to :dimension
  has_many :answers
end
