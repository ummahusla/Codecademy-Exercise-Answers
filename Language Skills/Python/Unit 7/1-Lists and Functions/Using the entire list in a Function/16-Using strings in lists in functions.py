n = ["Michael", "Lieberman"]
# Add your function here
def join_strings(words):
    result = ""
    for i in range(len(words)):
        result += words[i]
    return result
print join_strings(n)
