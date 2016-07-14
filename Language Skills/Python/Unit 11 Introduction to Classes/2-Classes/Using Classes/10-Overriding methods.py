class Car(object):
    condition = "new"
    def __init__(self, model, color, mpg):
        self.model = model
        self.color = color
        self.mpg   = mpg

    def display_car(self):
        return "This is a %s %s with %s MPG." % (self.color, self.model, self.mpg)

    def drive_car(self):
        self.condition = "used"
        return self.condition

class ElectricCar(Car):
    def __init__(self, model, color, mpg, battery_type):
        super(ElectricCar, self).__init__(model, color, mpg)
        self.battery_type = battery_type

    def drive_car(self):
        self.condition = "like new"
        return self.condition

my_car = ElectricCar("Ford", "black", 95,"molten salt")
print my_car.condition
print my_car.drive_car()
