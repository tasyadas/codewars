"""
    A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

    For example, take 153 (3 digits):

        1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
        
    and 1634 (4 digits):

        1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634

"""


def narcissistic( value ):
    toStr = str(value)
    akhir = len(toStr)
    sum = 0
    if len(toStr) > 1:
        for i in range(len(toStr)):
            sum += int(toStr[i]) ** akhir
        if sum == value:
            return True
        else:
            return False
    else:
        return True


print(narcissistic(7))
print(narcissistic(371))
print(narcissistic(122))
print(narcissistic(4887))
