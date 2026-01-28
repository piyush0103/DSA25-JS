const arr = [5,-2,5];

const findMaxSum = (arr) => {
    let currentSum=0;

    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if (currentSum > max) {
            max = currentSum;
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return max;
}


console.log("finding max sum in subarray " + findMaxSum(arr))