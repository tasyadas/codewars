"""
Description:

Complete the solution so that the function will break up camel casing, using a space between words.
"""

def solution(camelCase):
    result = ''
    for x in camelCase:
        result += ' '+x if x.isupper() else x

    return result

print(solution("helloWorld")) #hello World
print(solution("camelCase")) #camel Case
print(solution("breakCamelCase")) #break Camel Case