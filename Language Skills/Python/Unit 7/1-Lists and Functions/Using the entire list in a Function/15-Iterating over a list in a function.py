n = [3, 5, 7]

def total(numbers):
    result = 0
    for i in range(len(numbers)):
        result += numbers[i]
    return result

print total(n)
