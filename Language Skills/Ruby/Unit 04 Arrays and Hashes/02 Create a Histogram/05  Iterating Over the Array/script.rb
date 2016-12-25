puts "input: "
text = gets.chomp
words = text.split

frequencies = Hash.new(0)
words.each do |word|
    frequencies[word] = 1
end
