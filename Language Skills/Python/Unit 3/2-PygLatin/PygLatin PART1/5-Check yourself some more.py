print 'Welcome to the Pig Latin Translator!'

# Start coding here!
original = raw_input('TELL ME a word in ENGRIXH:').lower()
if len(original) > 0 and original.isalpha():
    print original.lower()
else:
    print 'empty'
