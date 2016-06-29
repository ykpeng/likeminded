class CreateProfileSections < ActiveRecord::Migration
  def change
    create_table :profile_sections do |t|
      t.integer :user_id, null: false
      t.string :section, null: false
      t.text :content

      t.timestamps null: false
    end
    add_index :profile_sections, :user_id
    add_index :profile_sections, [:user_id, :section], unique: true
  end
end
