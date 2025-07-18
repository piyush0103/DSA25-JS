const countSubArrayWithSumK = (arr, k) => {
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

const arr = [1, 2, 3];

console.log(countSubArrayWithSumK(arr, 3));
