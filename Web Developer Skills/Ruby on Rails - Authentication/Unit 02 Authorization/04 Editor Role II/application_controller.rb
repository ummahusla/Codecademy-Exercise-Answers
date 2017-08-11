class ApplicationController < ActionController::Base
   helper_method :current_user

   def current_user
     @current_user ||= User.find(session[:user_id]) if session[:user_id]
   end

   def require_user
     redirect_to '/login' unless current_user
   end

   def require_editor
     redirect_to '/' unless current_user.editor?
   end

end
