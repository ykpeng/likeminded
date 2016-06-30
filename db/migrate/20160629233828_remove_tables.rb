class RemoveTables < ActiveRecord::Migration
  def change
    drop_table :looking_fors
    drop_table :looking_for_joins
  end
end
