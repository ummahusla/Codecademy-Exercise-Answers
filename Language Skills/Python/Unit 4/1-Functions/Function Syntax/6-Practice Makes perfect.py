def cube(number):
    raw = number **3
    return raw

def by_three(number):
    if number % 3 == 0:
        number = number **3
        print number
        return number
    else:
        print 'n isnt'
        return False
