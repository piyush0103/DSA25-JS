const arr = [2, 3, 1, 2, 4, 3];
const k = 7


const findMinSumLenK = (arr, k) => {
    let total = 0;
    let right = 0;
    let left = 0;
    let min_len = arr.length + 1;
    let len = 0;
    for (right = 0; right < arr.length; right++) {
        total += arr[right];
        while (total >= k) {
            len = right - left + 1;
            min_len = Math.min(min_len, len);
            total -= arr[left];
            left++;
        }
    }
    return min_len > arr.length ? 0 : min_len;
}

console.log(findMinSumLenK(arr, k), 'heyy this is the answer')
