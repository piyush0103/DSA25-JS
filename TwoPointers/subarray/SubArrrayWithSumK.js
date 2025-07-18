// will not work for neagtive nos

const countSubArrayWithSumK = (arr, k) => {
	let start = 0;
	let end = 0;
	let sum = 0;
	let count = 0;
	for (end = 0; end < arr.length; end++) {
		sum += arr[end];

		while (sum > k&&(start<end)) {
			sum -= arr[start];
			start++;
		}
		if (sum == k ) {
			console.log(sum + '  s');
			count++;
		}
	}
	return count;
};

const arr = [1];

console.log(countSubArrayWithSumK(arr, 0));
