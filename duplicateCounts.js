/**
 * Count the number of Duplicates
    Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

    Example
    "abcde" -> 0 # no characters repeats more than once
    "aabbcde" -> 2 # 'a' and 'b'
    "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
    "indivisibility" -> 1 # 'i' occurs six times
    "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
    "aA11" -> 2 # 'a' and '1'
    "ABBA" -> 2 # 'A' and 'B' each occur twice
 */

function duplicateCount(text){
    if (text === '') {
        return 0;
    } else {

        obj = {}
        for (let i = 0; i < text.length; i++) {
            var temp = text[i].toLowerCase();
            if (obj[temp] === undefined) {
                obj[temp] = 1;
            } else {
                obj[temp] += 1;
            }
        }
        var jumlah = 0;
        for (let i in obj) {
            if (obj[i] > 1) {
                jumlah++;
            }
        }
        return jumlah;
    }
}

console.log(duplicateCount(""));
console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibility"));
console.log(duplicateCount("Indivisibilities"));