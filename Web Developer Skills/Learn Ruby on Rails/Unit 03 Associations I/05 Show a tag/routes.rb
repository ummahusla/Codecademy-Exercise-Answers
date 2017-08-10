Rails.application.routes.draw do
  get '/tags' => 'tags#index'
  get '/tags/:id' => 'tags#show', as: :tag
end
