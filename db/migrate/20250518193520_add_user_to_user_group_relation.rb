class AddUserToUserGroupRelation < ActiveRecord::Migration[8.0]
  def change
    create_join_table :users, :user_groups, table_name: :user_group_memberships do |t|
      t.timestamps
      t.integer :added_by_user_id, null: true
    end

     add_foreign_key :user_group_memberships, :users, column: :added_by_user_id, null: true
  end
end
