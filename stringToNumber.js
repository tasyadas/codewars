/**
 * Ubah inputan string ke dalam function stringToNumber menjadi number tanpa looping sama sekali
 */

function stringToNumber(arr) {
    const reducer = (accumulator, currentValue) => accumulator.concat(Number(currentValue));
    return (arr.split('')).reduce(reducer,[]);
}

console.log(stringToNumber('1234567'));
console.log(stringToNumber('821749812'));
console.log(stringToNumber('9186467356981275'));
console.log(stringToNumber('87264479124'));