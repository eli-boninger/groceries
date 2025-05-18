class AddInitialTableRelations < ActiveRecord::Migration[8.0]
  def change
    add_reference :lists, :user_group, null: false, foreign_key: true

    create_table :list_entries, primary_key: [ :list_id, :list_item_id ] do |t|
      t.belongs_to :list
      t.belongs_to :list_item

      t.timestamps
    end
  end
end
