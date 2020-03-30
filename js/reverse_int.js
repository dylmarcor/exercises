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
    let result = Number;
    for (let i = 0; i < y.length; i++) {
        arr.unshift(y.pop());
    }
    result = a.map((x) => {
        return parseInt(x, 10);
    }); 
    
    return result;
};
