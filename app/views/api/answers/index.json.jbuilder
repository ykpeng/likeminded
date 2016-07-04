json.array! @answers do |answer|
  json.extract! answer, :id, :question_id, :answer_choice, :user_id, :created_at, :updated_at
  json.question do
    json.extract! answer.question, :id, :content, :dimension_id
  end
end
