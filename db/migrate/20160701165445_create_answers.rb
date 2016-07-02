class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.integer :answer_choice, null: false
      t.integer :question_id, null: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end
    add_index :answers, :answer_choice
    add_index :answers, :user_id
    add_index :answers, [:question_id, :user_id], unique: true
  end
end
