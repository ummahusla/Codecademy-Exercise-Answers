def is_prime(x):
    n = 2
    Prime = False
    if x <2:
        Prime = False
    else:
        while n < x:
            if  x % n == 0:
                Prime = False
                break
            else:
                n +=1
                Prime = True
        else:
            Prime = True
    return Prime
