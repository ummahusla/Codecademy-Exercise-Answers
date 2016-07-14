def anti_vowel(text):
    vowels = 'aeiou'
    new_text = ''
    for i in text:
        if i.lower() not in vowels:
            new_text += i
    print new_text
    return new_text
