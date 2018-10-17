Rails.application.routes.draw do
  root 'murals#index'
  devise_for :users

  resources :murals, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :murals, only: [:index, :show]
    end
  end

end
