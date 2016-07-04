class Api::AnswersController < ApplicationController
  def index
    @user = current_user
    @answers = @user.answers
    render 'api/answers/index'
  end

  def show
    @answer = Answer.find(params[:id])
    render 'api/answers/show'
  end

  def create
    @answer = Answer.new(answer_params)
    @answer.user_id = current_user.id
    @user = current_user
    if @answer.save
      render 'api/answers/show'
    else
      render json: @answer.errors, status: 422
    end
  end

  def update
    @answer = Answer.find(params[:id])
    if @answer.update_attributes(answer_params)
      render 'api/answers/show'
    else
      render json: @answer.errors, status: 422
    end
  end

  private
  def answer_params
    params.require(:answer).permit(:question_id, :answer_choice)
  end
end
