class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, :looking_for, :email, :zipcode, :birthday, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :zipcode, length: { is: 5 }, numericality: { only_integer: true }
  validates :looking_for, inclusion: { in: ["Friendship", "Collaboration"] }
  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  attr_reader :password
  # attr_reader :dim_scores

  has_many :profile_sections
  has_many :answers
  has_many :questions, through: :answers
  has_many :dimensions, through: :questions

  # has_many :looking_for_joins, dependent: :destroy, inverse_of: :user
  # has_many :looking_fors, through: :looking_for_joins

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def filter_by_looking_for
    User.where(looking_for: self.looking_for).where.not(id: self.id)
  end

  def match_percentage(other_user)
    ((1 - distance(other_user)/ 240.00) * 100).to_i
  end

  def distance(other_user)
    distance = 0
    6.times do |i|
      distance += (self.dim_scores[i] - other_user.dim_scores[i]).abs
    end
    distance
  end

  def dim_scores
    @dim_scores = (1..6).map { |i| calc_dim_score(i) }
  end

  def calc_dim_score(dim_id)
    answers = Dimension.find(dim_id).answers.where(user_id: self.id)
    score = 0
    answers.each do |answer|
      score += answer.answer_choice
    end
    score
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
  end
end
