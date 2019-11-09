/**
 * Write Number in Expanded Form
    You will be given a number and you will need to return it as a string in Expanded Form. For example:

    expandedForm(12); // Should return '10 + 2'
    expandedForm(42); // Should return '40 + 2'
    expandedForm(70304); // Should return '70000 + 300 + 4'
    NOTE: All numbers will be whole numbers greater than 0.
 */

function expandedForm(num) {
    var tostring = String(num);
    if (num === parseInt(tostring[0]) * Math.pow(10,tostring.length - 1)) {
        return tostring;
    }
    if (tostring.length > 1) {
        return parseInt(tostring[0]) * Math.pow(10,tostring.length - 1) +'+'+expandedForm(Number(tostring.slice(1)));
    }else {
    return tostring;
    }
}

console.log(expandedForm(120));
console.log(expandedForm(42));
console.log(expandedForm(70304));