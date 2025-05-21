class ListsController < ApplicationController
  def index
    @lists = Current.user.user_groups.flat_map(&:lists)
    render json: @lists, status: :ok
  end
end
