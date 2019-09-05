def xo(s):
    x = 0
    o = 0

    for i in s:
        if i.lower() == 'x':
            x += 1
        elif i.lower() == 'o':
            o += 1
    
    if x == o: return True
    else: return False


print(xo('xo'))
print(xo('xo0'))
print(xo('xxxoo'))