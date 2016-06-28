class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.string :zipcode, null: false
      t.date :birthday, null: false
      t.string :img_url

      t.timestamps null: false
    end
    add_index :users, :username, unique: true
    add_index :users, :zipcode
    add_index :users, :birthday
  end
end
