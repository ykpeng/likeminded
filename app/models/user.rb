class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, :looking_for, :email, :zipcode, :birthday, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :zipcode, length: { is: 5 }, numericality: { only_integer: true }
  validates :looking_for, inclusion: { in: ["Friendship", "Collaboration"] }
  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  attr_reader :password

  has_many :profile_sections
  has_many :answers
  has_many :questions, through: :answers
  has_many :dimensions, through: :questions

  has_many :sent_messages,
  foreign_key: :sender_id,
  primary_key: :id,
  class_name: :Message

  has_many :received_messages,
  foreign_key: :receiver_id,
  primary_key: :id,
  class_name: :Message

  has_many :initiated_conversations,
  through: :sent_messages,
  source: :conversation

  has_many :received_conversations,
  through: :received_messages,
  source: :conversation

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    if user && user.is_password?(password)
      user
    else
      nil
    end
  end

  def completed
    self.answers.count(:all) == 60
  end

  def age
    now = Date.today
    now.year - self.birthday.year - ((now.month > self.birthday.month || (now.month == self.birthday.month && now.day >= self.birthday.day)) ? 0 : 1)
  end

  def distance(other_user)
    rad_per_deg = Math::PI/180  # PI / 180
    rad_miles = 3959            # Earth radius in miles

    dlat_rad = (other_user.lat - self.lat) * rad_per_deg  # Delta, converted to rad
    dlng_rad = (other_user.lng - self.lng) * rad_per_deg

    lat1_rad, lng1_rad = self.lat * rad_per_deg, self.lng * rad_per_deg
    lat2_rad, lng2_rad = other_user.lat * rad_per_deg, other_user.lng * rad_per_deg

    a = Math.sin(dlat_rad/2)**2 + Math.cos(lat1_rad) * Math.cos(lat2_rad) * Math.sin(dlng_rad/2)**2
    c = 2 * Math::atan2(Math::sqrt(a), Math::sqrt(1-a))

    rad_miles * c # Delta in miles
  end

  def match_percentage(other_user)
    ((1 - score_distance(other_user)/ 240.00) * 100).to_i
  end

  def score_distance(other_user)
    my_dim_scores = dim_scores
    other_dim_scores = other_user.dim_scores
    diff = 0
    (1..6).each do |i|
      diff += (my_dim_scores[i] - other_dim_scores[i]).abs
    end
    diff
  end

  def dim_scores
    @dim_scores = Hash.new
    (1..6).each do |i|
      @dim_scores[i] = 0
    end
    scores = Answer.joins(:question).where("answers.user_id = ?", self.id).group("questions.dimension_id").sum("answers.answer_choice")
    @dim_scores.merge!(scores)
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
    ensure_session_token_uniqueness
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def ensure_session_token_uniqueness
    user = User.find_by(session_token: self.session_token)
    if user && user.username != self.username
      self.session_token = SecureRandom.urlsafe_base64
    end
  end
end
