def distance_from_zero(num):
    if type(num) == int or type(num) == float:
        no = abs(num)
        return no
    else:
        return 'Nope'
