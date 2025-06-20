class SessionsController < ApplicationController
  allow_unauthenticated_access only: %i[ create ]
  rate_limit to: 10, within: 3.minutes, only: :create, with: -> { head(:too_many_requests) }

  def create
    if user = User.authenticate_by(params.permit(:email_address, :password))
      start_new_session_for user
      head(:ok)
    else
      head(:unauthorized)
    end
  end

  def destroy
    terminate_session
    redirect_to new_session_path
  end
end
