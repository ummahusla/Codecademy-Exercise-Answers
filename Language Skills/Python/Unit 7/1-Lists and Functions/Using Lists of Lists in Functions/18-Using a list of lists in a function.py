n = [[1, 2, 3], [4, 5, 6, 7, 8, 9]]
# Add your function here
def flatten(lists):
    results = []
    for i in range(len(lists)):
        for j in range(len(lists[i])):
            results.append(lists[i][j])
    return results
print flatten(n)
