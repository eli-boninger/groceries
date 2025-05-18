class UserGroupMembership < ApplicationRecord
  # enum access: [ :write, :read ]
  belongs_to :user
  belongs_to :user_group
  has_one :added_by_user_id, class_name: "User"
end
