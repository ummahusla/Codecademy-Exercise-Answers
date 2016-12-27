i = 20
loop do
  i -= 1
  next if i % 2 == 1
  print "#{i}"
  break if i <= 0
end