class ActorsController < ApplicationController
	def index
		@actors = Actor.all
	end
end
