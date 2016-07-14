def my_function(x):
    for i in range(0, len(x)):
        x[i] = x[i] * 2
    return x

print my_function(range(3)) 
