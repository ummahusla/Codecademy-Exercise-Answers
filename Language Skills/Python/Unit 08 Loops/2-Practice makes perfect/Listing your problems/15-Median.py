def median(a):
    a = sorted(a)
    b = len(a)
    if b%2 == 0:
        return (a[len(a)/2] + a[(len(a)/2) - 1]) / 2.0
    else:
        return a[(len(a)-1)/2]
