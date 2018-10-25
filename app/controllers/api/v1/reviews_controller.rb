class Api::V1::ReviewsController < ApplicationController

  def index
    render json: Review.all, adapter: :json
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render json: @review, adapter: :json
    else
      redirect_to "/murals/#{@review.mural_id}"
    end
  end

  private

  def review_params
    params.require(:review).permit(:rating, :comment, :mural_id, :user_id)
  end
end
