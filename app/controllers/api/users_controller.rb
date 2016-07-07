class Api::UsersController < ApplicationController
  SECTIONS = ["self summary", "doing with life", "good at", "favorites", "thinking about", "friday night", "message if"]

  def index
    @users = current_user.filter_by_looking_for
    # @users = @users.sort_by { |user| current_user.distance(user) }
    @users = @users.select { |user| user.answers.length >= 60 }
    render 'api/users/index'
  end

  def show
    @user = User.find(params[:id])
    render 'api/users/show'
  end

  def create
    @user = User.new(user_params)
    if @user.save
      SECTIONS.each do |section|
        ProfileSection.create!({ user_id: @user.id, section: section, content: ""})
      end

      # @questions = Question.all
      # @questions.each do |question|
      #   Answer.create!({ user_id: @user.id, question_id: question.id, answer_choice: 0 })
      # end

      login!(@user)
      render 'api/users/show'
    else
      Rails.logger.info(@user.errors.inspect)
      render json: @user.errors, status: 422
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.update_attributes(user_params)
      render 'api/users/show'
    else
      Rails.logger.info(@user.errors.inspect)
      render json: @user.errors, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :email, :birthday, :zipcode, :img_url, :looking_for, :city, :state, :lat, :lng)
  end
end
