def reverse(text):
    TETO=''
    x=len(text)
    while(x>0):
        TETO=TETO+text[x-1]
        x=x-1
    print TETO
    return TETO
