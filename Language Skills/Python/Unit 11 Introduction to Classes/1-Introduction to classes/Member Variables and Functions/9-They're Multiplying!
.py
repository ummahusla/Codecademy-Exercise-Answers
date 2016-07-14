class Animal(object):
    """Makes cute animals."""
    is_alive = True
    health = "good"
    def __init__(self, name, age):
        self.name = name
        self.age = age
    # Add your method here!
    def description(self):
        print self.name
        print self.age

hippo = Animal("HipoCrita",3)
sloth = Animal("Jofrado", 30)
ocelot = Animal("BR_HU3", 666)

print hippo.health
print sloth.health
print ocelot.health
