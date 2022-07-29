class User < ApplicationRecord
  has_secure_password
  validates :email, presence: true
  validates :email, uniqueness: true

  validates :first_name, presence: true
  validates :first_name, uniqueness: true

  validates :last_name, presence: true
  validates :last_name, uniqueness: true

  
end
