Rails.application.routes.draw do
  root 'albums#index'
  get 'albums' => 'albums#index'
  get 'albums/new' => 'albums#new'
  get 'albums/:id' => 'albums#show', as: :album
  post 'albums' => 'albums#create'

  get 'signup'  => 'users#new'
  resources :users

  get '/login' => 'sessions#new'
end
