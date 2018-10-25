Rails.application.routes.draw do
  devise_for :admins
  root 'murals#index'

  devise_for :users

  resources :users, only: [:show]

  resources :murals

  resources :users, only: [:show]

  namespace :api do
    namespace :v1 do
      resources :murals, only: [:index, :show]
    end
  end

end
