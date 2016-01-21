def remove_duplicates(x):
    b = []
    for a in x:
        if a not in b:
            b.append(a)
    return b
