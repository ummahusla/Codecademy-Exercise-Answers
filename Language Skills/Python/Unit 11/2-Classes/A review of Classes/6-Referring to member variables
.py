 class Car(object):
    condition = "new"
    def __init__(self, model, color, mpg):
        self.model = model
        self.color = color
        self.mpg = mpg

my_car = Car("Chevv","GOLDEN", 1933)

print my_car.model
print my_car.color
print my_car.mpg
