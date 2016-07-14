def check_bit4(input):
    if input & 0b1000 > 0:
        return "on"
    else:
        return "off"
