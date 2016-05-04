grades = [100, 100, 90, 40, 80, 100, 85, 70, 90, 65, 90, 85, 50.5]

def print_grades(grades):
	for value in grades:
		print value
print_grades(grades)

def grades_sum(scores):
	sum=0
	for i in scores:
		sum+=i
	return sum
print grades_sum(grades)

def grades_average(grades):
	average=grades_sum(grades)/float(len(grades))
	return average
print grades_average(grades)

def grades_variance(scores):
	average=grades_average(scores)
	variance=0
	for score in scores:
		variance+=(average-score)**2
	return variance/len(scores)
print grades_variance(grades)

def grades_std_deviation(variance):
	return variance**0.5
	
variance=grades_variance(grades)
print variance
print grades_std_deviation(variance)
