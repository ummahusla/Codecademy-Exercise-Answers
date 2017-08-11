class User < ActiveRecord::Base
  has_secure_password

  def editor?
    self.role == 'editor'
  end
end
