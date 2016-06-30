class CreateLookingFors < ActiveRecord::Migration
  def change
    create_table :looking_fors do |t|
      t.string :category, null: false
      t.timestamps null: false
    end
  end
end
