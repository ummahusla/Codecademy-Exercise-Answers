class ZombieAttack(Exception):

	numberOfZombies = 0

	def __init__(self, numberOfZombies):
		self.numberOfZombies = numberOfZombies

	def __str__(self):
		return repr("Attacked by " + str(self.numberOfZombies) + " zombies")

#write your code below
try:
    raise ZombieAttack(1)
except ZombieAttack as e:
    print e
