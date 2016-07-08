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

  def age
    now = Date.today
    now.year - self.birthday.year - ((now.month > self.birthday.month || (now.month == self.birthday.month && now.day >= self.birthday.day)) ? 0 : 1)
  end

  # def distance(other_user)
  #   self.lat
  # end

  def distance(loc1, loc2)
    rad_per_deg = Math::PI/180  # PI / 180
    rkm = 6371                  # Earth radius in kilometers
    rm = rkm * 1000             # Radius in meters

    dlat_rad = (loc2[0]-loc1[0]) * rad_per_deg  # Delta, converted to rad
    dlon_rad = (loc2[1]-loc1[1]) * rad_per_deg

    lat1_rad, lon1_rad = loc1.map {|i| i * rad_per_deg }
    lat2_rad, lon2_rad = loc2.map {|i| i * rad_per_deg }

    a = Math.sin(dlat_rad/2)**2 + Math.cos(lat1_rad) * Math.cos(lat2_rad) * Math.sin(dlon_rad/2)**2
    c = 2 * Math::atan2(Math::sqrt(a), Math::sqrt(1-a))

    rm * c # Delta in meters
  end

  def filter_by_looking_for
    User.where(looking_for: self.looking_for).where.not(id: self.id)
  end

  def match_percentage(other_user)
    ((1 - score_distance(other_user)/ 240.00) * 100).to_i
  end

  def score_distance(other_user)
    (self.sum - other_user.sum).abs
  end

  def sum
    sum = 0
    self.answers.each do |answer|
      sum += answer.answer_choice
    end
    sum
  end

  # def distance(other_user)
  #   distance = 0
  #   6.times do |i|
  #     distance += (self.dim_scores[i] - other_user.dim_scores[i]).abs
  #   end
  #   distance
  # end

  def dim_scores
    @dim_scores = (1..6).map { |i| calc_dim_score(i) }
  end

  def calc_dim_score(dim_id)
    # answers = self.answers.where(dimension_id: dim_id)
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
