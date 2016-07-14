def purify(x):
    par=[]
    for i in x:
        if (i % 2 == 0):
            par.append(i)
    return par
