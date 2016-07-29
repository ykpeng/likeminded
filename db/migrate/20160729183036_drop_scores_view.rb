class DropScoresView < ActiveRecord::Migration
  def change
    execute <<-SQL
      DROP MATERIALIZED VIEW scores
    SQL
  end
end
