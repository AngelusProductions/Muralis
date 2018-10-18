class MuralsController < ApplicationController
  before_action :authenticate_user!, except: [:index,:show]

  def index
    @murals = Mural.all
  end

  def new
    @mural = Mural.new
  end

  def create
    @mural = Mural.new(mural_params)
    @mural.user = current_user
    if @mural.save
      flash[:notice] = "Mural was successfully created"
      redirect_to root_path
    else
      render new_mural_path
    end
  end

  private

  def mural_params
    params.require(:mural).permit(:title,:photo,:description,:location)
  end
end
