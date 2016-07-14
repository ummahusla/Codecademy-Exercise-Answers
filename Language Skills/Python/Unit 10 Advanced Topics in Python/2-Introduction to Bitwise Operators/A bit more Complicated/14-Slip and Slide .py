def flip_bit(number,n):
    result = number ^ (0b1 << (n-1))
    return bin(result)
