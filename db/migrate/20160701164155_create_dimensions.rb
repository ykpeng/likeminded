class CreateDimensions < ActiveRecord::Migration
  def change
    create_table :dimensions do |t|
      t.string :name, null: false
      t.timestamps null: false
    end
    add_index :dimensions, :name, unique: true
  end
end
