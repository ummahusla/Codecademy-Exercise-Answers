puts "What's your favorite language?"
language = gets.chomp
case language
when "Ruby" then
  puts "Ruby is great for web apps!"
when "Python" then
  puts "Python is great for science."
when "JavaScript" then
  puts "JavaScript makes websites awesome."
when "HTML" then
  puts "HTML is what websites are made of!"
when "CSS" then
  puts "CSS makes websites pretty."
else
  puts "I don't know that language!"
end
