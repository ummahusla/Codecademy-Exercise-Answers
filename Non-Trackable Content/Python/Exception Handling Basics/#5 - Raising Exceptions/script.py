try:
	#we create an instance of the NameError exception
	raise NameError('Exception')
except NameError:		#catch that instance
	print "Our raised exception was caught"
