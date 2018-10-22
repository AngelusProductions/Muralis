class Api::V1::MuralsController < ApplicationController

  def index
    render json: Mural.all, adapter: :json
  end

  def show
    render json: Mural.find(params[:id])
  end

end
