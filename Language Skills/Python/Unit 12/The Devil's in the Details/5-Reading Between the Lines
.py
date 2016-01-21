my_file = open("text.txt", "r")
print my_file.readline()
print my_file.readline()
print my_file.readline()
my_file.close()

""" Sometimes only this code can get an
error message, so to skip this problem
you can use this code below """

my_file = open("text.txt", "w")
my_file.write("I'm the first line of the file!" + "\n")
my_file.write("I'm the second line." + "\n")
my_file.write("Third line here, boss." + "\n")
my_file.close()

my_file = open("text.txt", "r")
print my_file.readline()
print my_file.readline()
print my_file.readline()
my_file.close()
