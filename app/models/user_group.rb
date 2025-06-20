class UserGroup < ApplicationRecord
  has_many :lists
  has_many :user_group_memberships, dependent: :destroy
  has_many :users, through: :user_group_memberships
end
