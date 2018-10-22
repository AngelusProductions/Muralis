class Api::V1::ReviewsController < ApplicationController

  def index
    render json: Review.all, adapter: :json
  end
end
