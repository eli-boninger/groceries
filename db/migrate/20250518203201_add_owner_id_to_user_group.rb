class AddOwnerIdToUserGroup < ActiveRecord::Migration[8.0]
  def change
    change_table :user_groups do |t|
      t.integer :owner_id
    end

    add_foreign_key :user_groups, :users, column: :owner_id
  end
end
