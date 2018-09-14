Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/game', to: 'welcome#game', as: 'game'
  get '/game/round/:id', to: 'welcome#round', as: 'round'
  get '/game/win', to: 'welcome#win', as: 'win'

  root 'welcome#index'
end
