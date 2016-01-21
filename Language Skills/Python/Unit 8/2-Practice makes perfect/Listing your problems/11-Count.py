def count (sequence, item):
    count = 0
    for i in sequence:
        if type (item) != list:
            if i == item:
                count += 1
        else:
            for n in item:
                if n == i:
                    count += 1
    return count 
