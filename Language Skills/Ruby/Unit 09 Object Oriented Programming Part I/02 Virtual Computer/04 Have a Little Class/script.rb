class Computer
    @@users = Hash.new
    def initialize(username, password)
        @username = username
        @password = password
        @files = Hash.new
        @@users[username] = password
    end
end
