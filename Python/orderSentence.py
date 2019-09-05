def is_number(number):
    try:
        int(number)
        return True
    except ValueError:
        return False


def order(sentence):
    toArr = sentence.split(' ')
    obj = {}
    hasil = ''

    for i in toArr:
        for j in i:
            if is_number(j) != False:
                obj[j] = i

    for i in sorted(obj.keys()):
        if hasil == '':
            hasil += obj[i]
        else:
            hasil += ' '+obj[i]

    return hasil

    
print(order("is2 Thi1s T4est 3a"))