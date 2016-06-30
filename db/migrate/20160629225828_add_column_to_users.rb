class AddColumnToUsers < ActiveRecord::Migration
  def change
    add_column :users, :looking_for, :string, null: false
  end
end
