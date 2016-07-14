grades = [100, 100, 90, 40, 80, 100, 85, 70, 90, 65, 90, 85, 50.5]


def grades_sum(scores):
    total = 0
    for n in scores:
        total = total + n
        print total
    return total


def grades_average(grades):
    grades_sum(grades)
    avrg = grades_sum(grades) / float(len(grades))
    print avrg
    return avrg

grades_average(grades)
