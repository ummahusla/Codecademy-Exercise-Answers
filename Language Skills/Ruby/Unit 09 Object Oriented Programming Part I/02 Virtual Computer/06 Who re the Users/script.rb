class Computer
    @@users = Hash.new

    def initialize(username, password)
        @username = username
        @password = password
        @files = Hash.new
        @@users[username] = password
    end
    def create(filename)
        time = Time.now
        @files[filename] = time
        puts "file was created"
    end
    def Computer.get_users
        @@class_variable
    end
end
