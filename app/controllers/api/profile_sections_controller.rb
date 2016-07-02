class Api::ProfileSectionsController < ApplicationController
  #
  # def create
  #   @profile_section = ProfileSection.new(profile_section_params)
  #   if @profile_section.save
  #     render 'api/users/show'
  #   else
  #     render json: @profile_section.errors, status: 422
  #   end
  # end

  def update
    @user = User.find(params[:profile_section][:user_id])
    @profile_section = ProfileSection.find(params[:id])
    if @profile_section.update_attributes(profile_section_params)
      render 'api/users/show'
    else
      render json: @profile_section.errors, status: 422
    end
  end

  private
  def profile_section_params
    params.require(:profile_section).permit(:section, :content)
  end
end
