/*
    Given an array of integers, return indices of the 
    two numbers such that they add up to a specific target.

    You may assume that each input would have exactly one
    solution, and you may not use the same element twice.
*/

let twoSum = function(nums, target) {
    let one = 0, two = 0, test = 0, len = nums.length + 1;
    let arr = [];
    while (test < len) {
        for (let i = test + 1; i < nums.length; i++) {
            if (nums[test] + nums[i] == target) {
                arr.push(test);
                arr.push(i);
                return arr;
            }
        }
        test++;
    }
};

twoSum([3, 2, 4], 6);