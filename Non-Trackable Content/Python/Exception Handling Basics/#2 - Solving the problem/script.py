numerator = 32
denominator = 1

#enclose everything on line 7 with a try...except block and print an
#appropriate error message
try:
    print numerator / denominator
except ZeroDivisionError:
    print "Oops, you can't divide by zero!"
