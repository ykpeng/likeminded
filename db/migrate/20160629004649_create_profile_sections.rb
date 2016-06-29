class CreateProfileSections < ActiveRecord::Migration
  def change
    create_table :profile_sections do |t|

      t.timestamps null: false
    end
  end
end
