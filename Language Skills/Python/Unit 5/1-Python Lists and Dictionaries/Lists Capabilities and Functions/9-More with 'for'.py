start_list = [5, 3, 1, 2, 4]
square_list = []

# for loop number is ambiguous variable

for number in start_list:
    square = number ** 2 # calculate square to add later
    square_list.append(square) # add the calculation
    square_list.sort()
print square_list # print sorted version
