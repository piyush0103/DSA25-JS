const countSubArraySumK = (arr, k) => {
	let count = 0;
	let sum = 0;
	for (let x of arr) {
		sum += x;
		if (sum == k) {
			count++;
			sum = 0;
		}
	}
	return count;
};

console.log(countSubArraySumK([1, 2, 3], 3));
