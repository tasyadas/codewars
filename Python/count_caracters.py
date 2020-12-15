"""
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
"""

def count(string):
    objek = {}

    for i in string:
        objek.update({i: 0})
        for x in string:
            if x == i:
                objek[i] += 1
        string.replace(i,'')

    return objek

print(count('aba')) #{'a': 2, 'b': 1}
print(count('')) #{}