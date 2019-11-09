function foo() {
    let count = 0
    let start = 8

    while (start <= 20) {
        if (start % 4 == 0) {
            count++
        }
        start++
    }
    return count;    
}
// wrong
console.log(foo());
