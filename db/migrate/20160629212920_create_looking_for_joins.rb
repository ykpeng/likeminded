class CreateLookingForJoins < ActiveRecord::Migration
  def change
    create_table :looking_for_joins do |t|
      t.integer :looking_for_id, null: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end
    add_index :looking_for_joins, :looking_for_id
    add_index :looking_for_joins, :user_id
  end
end
