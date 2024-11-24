
//Given an array of positive integers nums and a positive integer target, return the minimal length of a
//        subarray
//        whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.
//
//
//
//        Example 1:
//
//        Input: target = 7, nums = [2,3,1,2,4,3]
//        Output: 2
//        Explanation: The subarray [4,3] has the minimal length under the problem constraint.

        const arr = [2, 3, 1, 2, 4, 3];
        let target = 7;
        let shortestSubArr = minSubArrayLen(target, arr);
       console.log(shortestSubArr);
    

   function minSubArrayLen(target,  nums) {
        let minSize = Number.MAX_VALUE;;
        let start = 0;
        let len = nums.length;
        let sum = 0;
        for (let right = 0; right < len; right++) {
            sum += nums[right];
            while (sum >= target) {
                minSize = Math.min(((right - start) + 1), minSize);
                sum -= nums[start++];
            }
        }
        return minSize != Number.MAX_VALUE ? minSize : 0;
    }



