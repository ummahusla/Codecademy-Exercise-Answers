def hotel_cost(nights):
    return nights*140
    print nights*140

def plane_ride_cost(city):
    if city == 'Charlotte':
        return 183
    elif city == 'Tampa':
        return 220
    elif city == 'Pittsburgh':
        return 222
    elif city == 'Los Angeles':
        return 475
print plane_ride_cost('Charlotte')
