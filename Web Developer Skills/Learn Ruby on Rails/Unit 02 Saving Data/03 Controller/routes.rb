Rails.application.routes.draw do
	get '/messages' => 'messages#index'
end
