/**
 * An array of different positive integers is given. We should create a code that gives us the number (or the numbers) that has (or have) the highest number of divisors among other data.

    The function proc_arrInt(), (Javascript: procArrInt()) will receive an array of unsorted integers and should output a list with the following results:
     example :

    arr1 = [66, 36, 49, 40, 73, 12, 77, 78, 76, 8, 50,
        20, 85, 22, 24, 68, 26, 59, 92, 93, 30]

    proc_arrInt(arr1) ------> [21, 2, [9, [36]]

    # 21 integers in the array
    # 2 primes: 73 and 97
    # 36 is the number that has the highest amount of divisors:
    # 1, 2, 3, 4, 6, 9, 12, 18, 36 (9 divisors, including 1 and 36)

    Another case :

    arr2 = [267, 273, 271, 145, 275, 150, 487, 169, 428, 50, 314, 444, 445,
        67, 458, 211, 58, 95, 357, 486, 359, 491, 108, 493, 247, 379]

    proc_arrInt(arr2) ------> [26, 7, [12, [108, 150, 444, 486]]]

    # 26 integers in the array
    # 7 primes: 271, 487, 67, 211, 359, 491, 379
    # 108, 150, 444 and 486 have the highest amount of divisors:
    # 108: [1, 2, 3, 4, 6, 9, 12, 18, 27, 36, 54, 108] (12 divisors)
    # 150: [1, 2, 3, 5, 6, 10, 15, 25, 30, 50, 75, 150] (12 divisors)
    # 444: [1, 2, 3, 4, 6, 12, 37, 74, 111, 148, 222, 444] (12 divisors)
    # 486: [1, 2, 3, 6, 9, 18, 27, 54, 81, 162, 243, 486] (12 divisors)
 */

function procArrInt(listNum) {
    var sum = listNum.length;
    var primes = [];
    var divisors = []
    var temp = 0;
    for (var i = 0; i < sum; i++) {        
        var count = 0;
        var temp1 = 0;
        for (var j = 1; j <= listNum[i]; j++) {
            if (listNum[i] % j === 0) {
                count++;
                temp1++;
            }
        }
        if (count === 2) {
            primes.push(listNum[i]);
        }
        if (temp1 > temp) {
            temp = temp1;
            divisors = [listNum[i]];
        } else if (temp1 === temp) {
            divisors.push(listNum[i]);
        }
    }

    for (let i = divisors.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (divisors[j] > divisors[j+1]) {
                let temp = divisors[j];
                divisors[j] = divisors[j+1];
                divisors[j+1] = temp;
            }
        }        
    }

    return [sum, primes.length,[temp,divisors]];
}



var list1 = [386,5,149,278,160,91,424,429,305,436,
52,58,188,190,288,72,458,460,461,462,207,211,214,
335,356,381];

console.log(procArrInt(list1)); // result1 = [26, 4, [18, [288]]];

var list2 = [258, 402, 279, 153, 423, 424, 430, 
49, 51, 58, 193, 199, 330, 369, 465, 468, 469, 
86, 352, 97, 99, 358, 364, 113, 499, 372];

console.log(procArrInt(list2)); // result2 = [26, 5, [18, [468]]];

var list3 = [5, 396, 397, 145, 274, 286, 159, 
422, 169, 44, 303, 433, 310, 450, 324, 326, 91,
226, 229, 233, 106, 237, 499, 126];

console.log(procArrInt(list3)); // result3 = [24, 6, [18, [396, 450]]];

var list4 = [641, 976, 517, 263, 136, 270, 941, 
400, 915, 790, 539, 414, 816, 546, 675,548, 299,
812, 45, 432, 392, 178, 310, 439, 956, 319, 450,
566, 72, 74, 715, 336, 723, 854, 472, 996, 604, 
861, 182, 609, 117, 484, 358, 1000, 363, 237, 
111, 629, 759, 505, 510];

console.log(procArrInt(list4)); // result4 = [51, 4, [20, [336, 432, 816]]];