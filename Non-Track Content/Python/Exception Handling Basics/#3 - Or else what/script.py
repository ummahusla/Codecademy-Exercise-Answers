try:		#we try to get the input from the user
	numerator = int(raw_input("Numerator: "))
	denominator = int(raw_input("Denominator: "))
	result = numerator / denominator
except ValueError:	#if the user didn't enter a number
	print "A valid integer wasn't entered!"
except ZeroDivisionError:
	print "We can't divide by zero!"
else:
    print result
