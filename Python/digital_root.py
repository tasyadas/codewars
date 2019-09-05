def digital_root(n):
    toStr = str(n)
    if len(toStr) > 1:
        n = 0
        for x in toStr:
            n += int(x)

        temp = str(n)
        if len(temp) > 1:
            return digital_root(n)
        else:
            return n
    else:
        return n

print(digital_root(1))