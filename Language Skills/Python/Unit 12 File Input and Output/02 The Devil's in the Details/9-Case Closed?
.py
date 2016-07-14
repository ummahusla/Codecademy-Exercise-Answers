with open("text.txt", "w") as my_file:
	my_file.write("Tretas dos Bronzetas")
	if my_file.closed == False:
	    my_file.close()
print my_file.closed
