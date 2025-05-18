class AddUserMembershipFKs < ActiveRecord::Migration[8.0]
  def change
    add_foreign_key :user_group_memberships, :users
    add_foreign_key :user_group_memberships, :user_groups
  end
end
