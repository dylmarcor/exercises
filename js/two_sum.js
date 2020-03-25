/*
    Given an array of integers, return indices of the 
    two numbers such that they add up to a specific target.

    You may assume that each input would have exactly one
    solution, and you may not use the same element twice.
*/


// My first version - Comment out one of the functions to run.

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

// Version found utilizing the Map object - most effecient
// var twoSum = function(nums, target) {
//     let map = new Map;
//     for (let i = 0; i < nums.length; i++) {
//         let complement = target - nums[i];
//         if (map.has(complement)) {
//             return [map.get(complement), i]
//         }
//         map.set(nums[i], i)
//     }
// };

if (twoSum([2, 7, 10, 12], 9) == [0, 1]) {
    console.log("Function correct");
}
if (twoSum([3, 2, 4], 6) == [1, 2]) {
    console.log("Function correct");
}