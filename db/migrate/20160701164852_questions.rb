class Questions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :content, null: false
      t.integer :dimension_id, null: false

      t.timestamps null: false
    end
    add_index :questions, :dimension_id
    add_index :questions, :content, unique: true
  end
end
