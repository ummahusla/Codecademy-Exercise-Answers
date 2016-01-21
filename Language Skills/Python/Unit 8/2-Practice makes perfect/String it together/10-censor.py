def censor(text, word):
    words = text.split(" ")
    w = []
    for i in words:
        if i == word:
            w.append(len(i)*"*")
        else: 
            w.append(i)
    print " ".join(w)
    return " ".join(w)
