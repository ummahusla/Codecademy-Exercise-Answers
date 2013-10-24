try:
	print 1 / 0
except:
	print "Something bad happened"
finally:
	print "This will always be executed"
