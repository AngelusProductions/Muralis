class Api::V1::UserController < ApplicationController

def index
  render json: current_user, adapter: :json
end


end
