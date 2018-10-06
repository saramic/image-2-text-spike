Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/game(/:id)', to: 'game#game', as: 'game'
  get '/game/round/:id', to: 'game#round', as: 'round'
  get '/win', to: 'welcome#win', as: 'win'

  namespace :api do
    resources :games
  end
  root 'welcome#index'
end
