Rails.application.routes.draw do
  root 'murals#index'

  devise_for :users

  resources :murals, only: [:index, :new, :create, :show] do
    resources :reviews, only: [:new, :create]
  end

  namespace :api do
    namespace :v1 do
      resources :murals, only: [:index, :show]
      resources :reviews, only: [:index, :show, :create]
      resources :user, only: [:index]
    end
  end

end
