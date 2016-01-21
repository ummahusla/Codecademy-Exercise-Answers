def is_int(x):
    if x - round(x) > 0:
        return False
    else:
        if x < 0 and x - round(x) < 0:
            return False
        else:
            return True
