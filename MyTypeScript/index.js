"use strict";
console.log("TypeScript Exercise 1");
//Number 2
function validISBN10(isbn) {
    let index = 0;
    let checkSum = 0;
    let xCount = 0;
    for (; index < isbn.length; index++) {
        if (isbn[index] === 'X') {
            xCount += 1;
        }
        checkSum += parseInt(isbn[index]) * (index + 1);
    }
    if (isbn.length !== 10) {
        return false;
    }
    if (isbn[isbn.length - 1] === 'X' && xCount === 1) {
        return true;
    }
    return checkSum % 11 === 0;
}
var x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];
console.log(validISBN10(x));

