/* 
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * From LeetCode problem https://leetcode.com/problems/reverse-integer/
 *
 */

let reverse = function(x) {
    if (x < (-21**31) || x > (-21**31 -1)) {
        return "Larger int than 32-bit."
    }
};
