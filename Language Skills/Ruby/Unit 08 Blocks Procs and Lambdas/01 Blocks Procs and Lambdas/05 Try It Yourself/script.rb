def double(n)
  puts "Doubles"
  yield(2)

end

yield_name(2) { |n| puts "#{n} double equal" }
