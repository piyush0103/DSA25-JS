const arr = [0, 1, 0, 1];

function findMaxbalancedSubArr(arr) {
    let max_len = 0;
    let curr_len = 0;
    let curr_sum = 0;
    const prefix_sum = new Map();
    prefix_sum.set(0, -1);

    for (let i = 0; i < arr.length; i++) {
        curr_sum += arr[i] > 0 ? 1 : -1;
        if (prefix_sum.has(curr_sum)) {
            curr_len = i - prefix_sum.get(curr_sum);
            console.log('summm===> ', curr_len)
            max_len = Math.max(curr_len, max_len);
        } else {
            prefix_sum.set(curr_sum, i);
        }
    }
    return max_len;
}


console.log('max len sub array with balanced 0 1====>', findMaxbalancedSubArr(arr))