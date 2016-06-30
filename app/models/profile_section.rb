class ProfileSection < ActiveRecord::Base
  validates :user_id, :section, presence: true
  validates :user_id, uniqueness: { scope: :section }
  validates :section, inclusion: { in: ["self summary", "doing with life", "good at", "favorites", "thinking about", "friday night", "message if"] }

  belongs_to :user
end
