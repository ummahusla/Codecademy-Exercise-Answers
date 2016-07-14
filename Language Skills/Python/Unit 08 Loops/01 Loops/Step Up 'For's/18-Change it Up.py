fruits = ['banana', 'apple', 'orange', 'tomato', 'pear', 'grape']

print 'You have...'
for f in fruits:
    if f == 'tomato':
        print 'A tomato is not a fruit!' # (It actually is.)
        #REMOVED THE BREAK COMMAND
    print 'A', f
else:
    print 'A fine selection of fruits!'
