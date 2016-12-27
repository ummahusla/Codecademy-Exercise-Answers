class Application
  attr_accessor :status
  def initialize; end
  # Add your method here!
  public
  def print_status
      puts "All systems go!"
  end
  private
  def password
      return 12345
  end
end
