module Languages
  FAVE = "Ruby"  # This is what you typed before, right? :D
end

class Master
    include Languages
  def initialize; end
  def victory
    puts FAVE
  end
end

total = Master.new
total.victory
