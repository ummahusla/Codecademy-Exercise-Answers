class Car(object):
    condition = 'new'
    def __init__(self, model, color, mpg):
        self.model = model
        self.color = color
        self.mpg = mpg


my_car = Car("DeLorean", "silver", 88)
print my_car.condition
