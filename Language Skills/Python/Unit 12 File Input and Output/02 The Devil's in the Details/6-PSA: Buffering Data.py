# Open the file for reading
read_file = open("text.txt", "r")

# Use a second file handler to open the file for writing
write_file = open("text.txt", "w")
# Write to the file
write_file.write("Not closing files is VERY BAD.")

# Try to read from the file
print read_file.read()
write_file.close()
read_file.close()
