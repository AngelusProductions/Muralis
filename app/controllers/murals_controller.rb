class MuralsController < ApplicationController
  def index
    @murals = Mural.all
  end
end
