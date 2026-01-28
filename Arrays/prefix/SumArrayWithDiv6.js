const arr = [5,0,0,0]
const k = 6;

function findSubWithDivByK(arr, k) {
    const remaindermap = {0:-1};
    let total = 0;
    let remainder = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
        remainder = total % k;
        if (remaindermap[remainder] !== undefined) {
            if ((i - remaindermap[remainder]) > 1) {
                 console.log(remaindermap)
                return true;
            }
        }else{
        remaindermap[remainder] = i;
        }
    }
    console.log(remaindermap)
    return false;
}

const checkSubarraySum = function(nums, k) {
    const remainderMap = new Map();
    remainderMap.set(0, -1);
    let prefixSum = 0;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        const remainder = prefixSum % k;

        if (remainderMap.has(remainder)) {
            if (i - remainderMap.get(remainder) > 1) {
                console.log(remainderMap)
                return true;
            }
        } else {
            remainderMap.set(remainder, i);
        }
    }
    return false;
};

console.log(findSubWithDivByK(arr, k), '..heyyy')


console.log(checkSubarraySum(arr,k),'heyy this is ')