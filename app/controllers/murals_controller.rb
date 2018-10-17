class MuralsController < ApplicationController
  def index
    @murals = Mural.all
  end

  def show
    @mural = Mural.find(params[:id])
  end
end
