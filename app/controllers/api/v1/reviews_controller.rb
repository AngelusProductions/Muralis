class Api::V1::ReviewsController < ApplicationController

  def index
    render json: Review.all, adapter: :json
  end

  def create
    @review = Review.create!(review_params)
    render json: @review, adapter: :json
  end

  private

  def review_params
    params.require(:review).permit(:rating, :comment, :mural_id, :user_id)
  end
end
