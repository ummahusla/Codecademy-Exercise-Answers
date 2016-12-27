# Create your module here!
module MartialArts
    def swordsman
        puts "I'm a swordsman."
    end
end
class Ninja
    include MartialArts
  def initialize(clan)
    @clan = clan
  end
end

class Samurai
    include MartialArts
  def initialize(shogun)
    @shogun = shogun
  end
end
