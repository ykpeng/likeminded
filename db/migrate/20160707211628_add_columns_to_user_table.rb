class AddColumnsToUserTable < ActiveRecord::Migration
  def change
    add_column :users, :city, :string
    add_column :users, :state, :string
    add_column :users, :lat, :float
    add_index :users, :lat
    add_column :users, :lng, :float
    add_index :users, :lng
  end
end
