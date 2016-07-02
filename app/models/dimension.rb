class Dimension < ActiveRecord::Base
  validates :name, presence: true, uniqueness: true, inclusion: { in: ["Investigative", "Artistic","Social","Realistic","Enterprising","Conventional"]}

  has_many :questions
  has_many :answers, through: :questions
  has_many :users, through: :answers
end
