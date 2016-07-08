class Api::UsersController < ApplicationController
  SECTIONS = ["self summary", "doing with life", "good at", "favorites", "thinking about", "friday night", "message if"]

  def index
    @users = User.where.not(id: current_user.id)
    # @users = current_user.filter_by_looking_for
    @users = @users.select { |user| user.answers.length >= 60 }

    min_age = params[:user][:max_age]
    max_age = params[:user][:min_age]
    if min_age && max_age
      @users = @users.select { |user| user.age.between(min_age, max_age) }
    end

    max_distance = params[:max_distance]
    if max_distance
      @users = @users.select { |user| user.distance(current_user) <= max_distance }
    end

    looking_for = params[:looking_for]
    if looking_for
      @users.where(looking_for: looking_for)
    end

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
    params.require(:user).permit(:username, :password, :email, :birthday, :zipcode, :img_url, :looking_for, :city, :state, :lat, :lng, :max_age, :min_age)
  end
end
