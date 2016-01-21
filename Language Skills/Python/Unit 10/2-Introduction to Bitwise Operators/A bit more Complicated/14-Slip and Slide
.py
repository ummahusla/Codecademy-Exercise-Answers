def flip_bit(number, n):
    mask=0b1<<n-1
    result=number^mask
    return bin(result)
print flip_bit(30,3)
