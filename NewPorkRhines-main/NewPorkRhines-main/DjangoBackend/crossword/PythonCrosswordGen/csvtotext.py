# # # """Converting csv database to 1 wordlist and 1 cluelist"""
import csv

words = set()
wordslist = []
columns = []
filename = "PythonCrosswordGen/nytcrosswords.csv"
with open(filename, 'r') as f:
    csvreader = csv.reader(f)
    columns = next(csvreader)
    for row in csvreader:
        if row[1] in words: continue
        words.add(row[1])
        wordslist.append(row[1:])

# wordslist.sort()
# print(len(wordslist))
# print(wordslist[:5])

file2 = 'PythonCrosswordGen/words-clueslist.txt'

# Writing the word into 2 files, in order of length from 3 to 20
# Each word length will have ~200 words each

with open(file2, 'w') as out2:
    for i in range(2, 11):
        j = 0
        for row in wordslist:
            if len(row[0]) != i: continue
            if j > 400: break
            out2.write(row[0])
            out2.write("\t")
            out2.write(row[1])
            out2.write("\n")
            j += 1
