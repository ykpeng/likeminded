class Api::UsersController < ApplicationController
  SECTIONS = ["self summary", "doing with life", "good at", "favorites", "thinking about", "friday night", "message if"]

  def index
    looking_for = params[:lookingFor]
    if looking_for != "Either"
      @users = User.where(looking_for: looking_for).where.not(id: current_user.id)
    else
      @users = User.where.not(id: current_user.id)
    end

    min_age = params[:minAge].to_i
    max_age = params[:maxAge].to_i
    if min_age && max_age
      @users = @users.where(birthday: birthday_range)
    end

    max_distance = params[:maxDistance].to_i
    if max_distance
      @users = @users.select { |user| current_user.distance(user) <= max_distance }
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
  def birthday_range
    start_date = Date.today - 365 * params[:maxAge].to_i
    end_date = Date.today - 365 * params[:minAge].to_i
    (start_date..end_date)
  end

  def user_params
    params.require(:user).permit(:username, :password, :email, :birthday, :zipcode, :img_url, :looking_for, :city, :state, :lat, :lng)
  end
end
