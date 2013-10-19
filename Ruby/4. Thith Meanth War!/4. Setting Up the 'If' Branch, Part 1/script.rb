print "Get me some text"
user_input = gets.chomp
user_input.downcase!
if user_input.include? "s" 
puts "I'm here!" 
end