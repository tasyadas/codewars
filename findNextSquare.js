/**
 * You might know some pretty large perfect squares. But what about the NEXT one?

    Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

    If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.

    Examples:

    findNextSquare(121) --> returns 144
    findNextSquare(625) --> returns 676
    findNextSquare(114) --> returns -1 since 114 is not a perfect
 */

function findNextSquare(sq) {
    // Return the next square if sq if a perfect square, -1 otherwise
    var kuadrat = Math.sqrt(sq);
    if ( kuadrat !== Math.round(kuadrat)) {
        return -1;
    } else {
        kuadrat += 1;
        return Math.pow(kuadrat,2);
    }
}



console.log(findNextSquare(121)); //144, "Wrong output for 121"
console.log(findNextSquare(625)); //676, "Wrong output for 625"
console.log(findNextSquare(319225)); //320356, "Wrong output for 319225"
console.log(findNextSquare(15241383936)); //15241630849, "Wrong output for 15241383936"


console.log(findNextSquare(155)); //-1, "Wrong output for 155"
console.log(findNextSquare(342786627)); //-1, "Wrong output for 342786627"

  