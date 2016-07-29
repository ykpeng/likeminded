class CreateScoresView < ActiveRecord::Migration
  def change
    execute <<-SQL
      CREATE MATERIALIZED VIEW scores AS
        SELECT
          scores_one.user_id AS user_id,
          scores_one.score AS score_one,
          scores_two.score AS score_two,
          scores_three.score AS score_three,
          scores_four.score AS score_four,
          scores_five.score AS score_five,
          scores_six.score AS score_six
        FROM
          (SELECT answers.user_id AS user_id,
          SUM(answers.answer_choice) AS score
          FROM answers
          INNER JOIN questions ON answers.question_id = questions.id
          WHERE questions.dimension_id = 1
          GROUP BY answers.user_id) AS scores_one

          INNER JOIN

          (SELECT answers.user_id AS user_id,
          SUM(answers.answer_choice) AS score
          FROM answers
          INNER JOIN questions ON answers.question_id = questions.id
          WHERE questions.dimension_id = 2
          GROUP BY answers.user_id) AS scores_two ON scores_one.user_id = scores_two.user_id

          INNER JOIN

          (SELECT answers.user_id AS user_id,
          SUM(answers.answer_choice) AS score
          FROM answers
          INNER JOIN questions ON answers.question_id = questions.id
          WHERE questions.dimension_id = 3
          GROUP BY answers.user_id) AS scores_three ON scores_two.user_id = scores_three.user_id

          INNER JOIN

          (SELECT answers.user_id AS user_id,
          SUM(answers.answer_choice) AS score
          FROM answers
          INNER JOIN questions ON answers.question_id = questions.id
          WHERE questions.dimension_id = 4
          GROUP BY answers.user_id) AS scores_four ON scores_three.user_id = scores_four.user_id

          INNER JOIN

          (SELECT answers.user_id AS user_id,
          SUM(answers.answer_choice) AS score
          FROM answers
          INNER JOIN questions ON answers.question_id = questions.id
          WHERE questions.dimension_id = 5
          GROUP BY answers.user_id) AS scores_five ON scores_four.user_id = scores_five.user_id

          INNER JOIN

          (SELECT answers.user_id AS user_id,
          SUM(answers.answer_choice) AS score
          FROM answers
          INNER JOIN questions ON answers.question_id = questions.id
          WHERE questions.dimension_id = 6
          GROUP BY answers.user_id) AS scores_six ON scores_five.user_id = scores_six.user_id
    SQL
  end
end
