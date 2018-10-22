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

  def edit
    binding.pry
    @mural = Mural.find(params[:id])
  end

  def update
    @mural = Mural.find(params[:id])
    if @mural.update_attributes(mural_params)
      redirect_to "/users/#{@mural.user_id}", notice: 'Mural was edited successfully'
    else
      render :edit
    end
  end

  private

  def mural_params
    params.require(:mural).permit(:title,:photo,:description,:location)
  end
end
