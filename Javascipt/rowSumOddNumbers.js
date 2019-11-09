/**
 * Given the triangle of consecutive odd numbers:

                    1
                3     5
            7     9    11
        13    15    17    19
    21    23    25    27    29
    ...
    Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

    rowSumOddNumbers(1); // 1
    rowSumOddNumbers(2); // 3 + 5 = 8
 */

function hitung(params) {
    if (params.length === 0) {
        return 0;
    } else {
        return params[0] + hitung(params.slice(1));
    }
}

function rowSumOddNumbers(n) {
    if (n == 1) {return 1;}
    else {
        var arr = [];
        var jumlah = 0;
        for (let i = 0; i < n; i++) {
            jumlah += i;
        }
        for (let i = 0; i < Math.pow(n,3); i++) {
            if (i % 2 !== 0 ) {
                arr.push(i);
            }
        }
        return hitung(arr.slice(jumlah, jumlah+n));
    }
}

// bestAnswer
// function rowSumOddNumbers(n) {
//     return n*n*n
// }

console.log(rowSumOddNumbers(1)); // 1
console.log(rowSumOddNumbers(2)); // 8
console.log(rowSumOddNumbers(42)); // 74088