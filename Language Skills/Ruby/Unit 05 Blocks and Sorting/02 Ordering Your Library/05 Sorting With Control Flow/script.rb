def alphabetize(arr, rev=false)
    if rev==true
        return arr.sort!.reverse!
    else
        return arr.sort!
    end
end

puts alphabetize([4,3,1,5,7,4,3])
