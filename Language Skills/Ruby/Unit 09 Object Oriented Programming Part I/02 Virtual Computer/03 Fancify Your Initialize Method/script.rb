class Computer
    def initialize(username, password)
        @username = username
        @password = password
        @files = Hash.new
    end
end
