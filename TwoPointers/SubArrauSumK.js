// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an array.



const countSubArraySumK = (arr, k) => {
    let len = arr.length;
	let hash = new Map();
	let count = 0;
	let sum = 0;
	hash.set(0, 1);
	for (let i = 0; i < len; i++) {
		sum += arr[i];
		if (hash.has(sum - k)) {
			count += hash.get(sum - k);
		}
		hash.set(sum, hash.get(sum) ? hash.get(sum) + 1 : 1);

	}
	return count;
};


console.log(countSubArraySumK([1, 2, 3], 3));
