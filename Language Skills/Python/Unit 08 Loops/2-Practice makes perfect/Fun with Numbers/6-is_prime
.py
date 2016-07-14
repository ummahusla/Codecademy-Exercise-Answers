def is_prime(x):
    Prime = False
    if (x < 2):
        Prime = False
    elif (x == 2):
        Prime = True
    else:
        for n in range(2,x):
            if ( x % n) == 0:
                Prime = False
                break
            else:
                Prime = True
    return Prime
