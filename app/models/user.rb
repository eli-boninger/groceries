class User < ApplicationRecord
  has_secure_password
  has_many :sessions, dependent: :destroy
  has_many :user_group_memberships
  has_many :user_groups, through: :user_group_memberships

  normalizes :email_address, with: ->(e) { e.strip.downcase }
end
