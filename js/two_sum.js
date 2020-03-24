let twoSum = function(nums, target) {
    let one = 0, two = 0, test = 0, len = nums.length + 1;
    let arr = [];
    while (test < len) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[test] + nums[i] == target) {
                arr.push(test);
                arr.push(i);
                return arr;
            }
        }
        test++;
    }
};

twoSum([2, 7, 11, 13], 9);