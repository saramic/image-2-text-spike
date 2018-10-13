class User < ApplicationRecord
  before_save :set_jti

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :jwt_authenticatable, jwt_revocation_strategy: JWTBlacklist

  private

  def set_jti
    self.jti ||= SecureRandom.uuid
  end
end
