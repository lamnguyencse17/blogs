require 'jwt'

class Api::V1::UsersController < ApplicationController
  include JsonWebToken
  skip_before_action :authenticate_request, only: [:create]
  def create
    @user = User.new(create_user_params)
    @user.password = params[:password]
    @user.save!

    token, = jwt_encode
    render json: { user: @user, token: }
  end

  private

  def create_user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
