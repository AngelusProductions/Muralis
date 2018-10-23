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
    @mural = Mural.find(params[:id])
    @user = User.find(@mural.user_id)
  end

  def update
    @mural = Mural.find(params[:id])
    if @mural.update_attributes(mural_params)
      redirect_to "/users/#{@mural.user_id}", notice: "Mural was edited successfully"
    else
      render :edit
    end
  end

  def destroy
    @murals = Mural.all
    user_id = Mural.find(params[:id]).user_id
    Mural.destroy(params[:id])
    redirect_to "/users/#{user_id}", notice: "Mural was deleted successfully"
  end

  private

  def mural_params
    params.require(:mural).permit(:title,:photo,:description,:location)
  end
end
