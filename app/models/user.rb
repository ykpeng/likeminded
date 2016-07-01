class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, :looking_for, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :looking_for, inclusion: { in: ["Friendship", "Collaboration"] }
  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  attr_reader :password

  has_many :profile_sections

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

  # def age
  #
  # end

  def filter_by_looking_for(looking_for_value)
    User.where(looking_for: looking_for_value).where.not(id: self.id)
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
