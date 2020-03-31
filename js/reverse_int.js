/* 
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * From LeetCode problem https://leetcode.com/problems/reverse-integer/
 *
 */

let reverse = function(x) {
    // if (Number.isNaN(x)) {
    //     return "Not a number!";
    // }
    if (x < ((-21)**31) || x > (21**31 -1)) {
        return "Larger int than 32-bit."
    }

    let y = (""+x).split("");
    let arr = [];
    for (let i = 0; i < y.length + 1; i++) {
        arr.push(y.pop());
        console.log(arr);
    }

    return arr;
};

console.log(reverse(321));