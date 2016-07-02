class Answer < ActiveRecord::Base
  validates :user_id, :question_id, :answer_choice, presence: true
  validates :user_id, uniqueness: { scope: :question_id }
  validates :answer_choice, inclusion: { in: [0,1,2,3,4,5] }

  belongs_to :question
  belongs_to :user
end
